function tetsGetConfig() {
  getConfig("BASE_PAYMENT_URL")
}

/**
 * Helper to get config from "Settings" sheet
 */
function getConfig(key) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings");
  if (!sheet) return null;
  const data = sheet.getDataRange().getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) return data[i][1];
  }
  return null;
}


/**
 * Create menu for create unique ID and sync tools
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("⚙️ Admin Tools")
    .addItem("Generate Product ID", "generarIdFilaActual")
    .addSeparator()
    .addItem("🔄 Sync All Links", "syncAllLinks")
    .addToUi();
}

/**
 * Detect manual edits to Column A in "Productos" sheet
 */
function onEdit(e) {
  try {
    const sheet = e.source.getActiveSheet();
    const range = e.range;

    if (sheet.getName() !== "Productos") return;

    const col = range.getColumn();
    const row = range.getRow();

    // Si cambia la Columna A (ID)
    if (col === 1 && row > 1) {
      const newId = range.getValue();
      updateLinkForRow(sheet, row, newId);
    }
  } catch (err) {
    console.error("Error in onEdit: " + err.toString());
  }
}

/**
 * Manually sync all links in the Productos sheet
 */
function syncAllLinks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Productos");
  if (!sheet) {
    SpreadsheetApp.getActive().toast("Error: No se encontró la hoja 'Productos'");
    return;
  }

  const data = sheet.getDataRange().getValues();
  const baseUrl1 = getConfig("BASE_PAYMENT_URL");
  const baseUrl2 = getConfig("BASE_PAYMENT_URL2");

  if (!baseUrl1 && !baseUrl2) {
    SpreadsheetApp.getActive().toast("Error: Configura BASE_PAYMENT_URL o BASE_PAYMENT_URL2 en Settings");
    return;
  }

  const LINK1_COL_INDEX = 5; // Column F
  const LINK2_COL_INDEX = 6; // Column G

  for (let i = 1; i < data.length; i++) {
    const id = data[i][0];
    const link1 = data[i][LINK1_COL_INDEX];
    const link2 = data[i][LINK2_COL_INDEX];

    // Sincronizar si hay ID y alguno de los links falta
    if (id && (!link1 || !link2)) {
      updateLinkForRow(sheet, i + 1, id);
    }
  }

  SpreadsheetApp.getActive().toast("Sincronización de links completada");
}

/**
 * Helper to update/clear link based on ID
 */
function updateLinkForRow(sheet, row, id) {
  const COL_F = 6;
  const COL_G = 7;

  const cellF = sheet.getRange(row, COL_F);
  const cellG = sheet.getRange(row, COL_G);

  if (!id) {
    cellF.clearContent();
    cellG.clearContent();
    return;
  }

  const baseUrl1 = getConfig("BASE_PAYMENT_URL");
  if (baseUrl1) {
    const fullLink1 = `${baseUrl1}?p=${id}`;
    cellF.setValue(fullLink1);
  }

  const baseUrl2 = getConfig("BASE_PAYMENT_URL2");
  if (baseUrl2) {
    const fullLink2 = `${baseUrl2}?p=${id}`;
    cellG.setFormula(`=HYPERLINK("${fullLink2}", "🔗 Abrir Pago")`);
  }
}

function generarIdFilaActual() {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== "Productos") return;

  const row = sheet.getActiveRange().getRow();
  if (row === 1) return;

  const ID_COL = 1;      // Column A
  const idCell = sheet.getRange(row, ID_COL);

  if (idCell.getValue()) {
    SpreadsheetApp.getActive().toast("Esta fila ya tiene ID");
    return;
  }

  const newId = generateId();
  idCell.setValue(newId);

  // Forzamos la actualización del link
  updateLinkForRow(sheet, row, newId);

  SpreadsheetApp.getActive().toast("ID y Link generados con éxito");
}

/**
 * genrator ID
 */
function generateId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * App Script Web App Entry Point 
 * (p = se leera en la plantilla variable y parametro tambien por URL GET)
 */
function doGet(e) {
  const p = e.parameter.p;
  const template = HtmlService.createTemplateFromFile("index");
  template.p = p || "";

  return template.evaluate()
    .setTitle("Pasarela de Pago | Anibal")
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Helper to include files in templates
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * get product by id (exposed to client)
 */
function getProductData(id) {
  try {
    if (!id) return { error: "Missing product id" };
    const product = getProductById(id);
    if (!product) return { error: "Product not found" };
    return product;
  } catch (error) {
    return { error: error.toString() };
  }
}

function testgetProductById() { console.log(getProductById('PYbP2v5Q')); }
function getProductById(id) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Productos");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    // Check if ID matches and product is active (Column E = index 4)
    if (data[i][0].toString() === id.toString() && data[i][4].toString() === "1") {
      return {
        id: data[i][0],
        nombre: data[i][1],
        precio: data[i][2],
        descripcion: data[i][3],
        activo: data[i][4]
      };
    }
  }

  return null;
}

/**
 * Register payment (exposed to client)
 */
function registerPayment(payload) {
  return doPost({ postData: { contents: JSON.stringify(payload) } });
}

/**
 * return json data (kept for legacy/API support if needed)
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Function Hi
 */
function saludarATitok() {
  console.log("hola tiktok");
}

/**
 * Handle POST requests for payment verification
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Ventas");

    if (!sheet) {
      sheet = ss.insertSheet("Ventas");
      sheet.appendRow(["Timestamp", "Producto ID", "Producto Nombre", "Dólares", "Nombre Cliente", "Email Cliente", "Captura Link"]);
      sheet.setFrozenRows(1);
    }

    let imageUrl = "No subida";
    if (data.image && data.imageName) {
      imageUrl = saveToDrive(data.image, data.imageName);
    }

    sheet.appendRow([
      new Date(),
      data.productId,
      data.productName,
      data.dollars,
      data.customerName,
      data.customerEmail,
      imageUrl
    ]);

    return jsonResponse({ success: true, message: "Pago registrado para verificación" });

  } catch (error) {
    return jsonResponse({ error: error.toString() });
  }
}

/**
 * Save Base64 image to Google Drive
 */
function saveToDrive(base64Data, fileName) {
  try {
    const folderId = getConfig("FOLDER_ID") || "1Q5ibazYmKoYeSbX-Rl1xVPhUoYNRSdnM"; // Fallback provided just in case
    const folder = DriveApp.getFolderById(folderId);

    const contentType = base64Data.substring(5, base64Data.indexOf(';'));
    const bytes = Utilities.base64Decode(base64Data.split(',')[1]);
    const blob = Utilities.newBlob(bytes, contentType, fileName);
    const file = folder.createFile(blob);

    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    return file.getUrl();
  } catch (e) {
    return "Error al guardar imagen: " + e.toString();
  }
}
