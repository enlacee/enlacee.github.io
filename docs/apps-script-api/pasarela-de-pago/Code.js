function tetsGetConfig(){
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
  const baseUrl = getConfig("BASE_PAYMENT_URL");

  if (!baseUrl) {
    SpreadsheetApp.getActive().toast("Error: Configura BASE_PAYMENT_URL en Settings");
    return;
  }

  const LINK_COL_INDEX = 5; // índice 5 = columna F en el array

  for (let i = 1; i < data.length; i++) {
    const id = data[i][0]; 
    const link = data[i][LINK_COL_INDEX];

    // solo generar si hay ID y el link está vacío
    if (id && !link) {
      updateLinkForRow(sheet, i + 1, id);
    }
  }

  SpreadsheetApp.getActive().toast("Links faltantes sincronizados");
}

/**
 * Helper to update/clear link based on ID
 */
function updateLinkForRow(sheet, row, id) {
  const LINK_COL = 6; // Column F
  const linkCell = sheet.getRange(row, LINK_COL);

  if (!id) {
    linkCell.clearContent();
    return;
  }

  const baseUrl = getConfig("BASE_PAYMENT_URL");
  if (baseUrl) {
    const fullLink = baseUrl.endsWith('/') ? `${baseUrl}?p=${id}` : `${baseUrl}/?p=${id}`;
    linkCell.setValue(fullLink);
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
 * App Script by chatgpt
 */
function doGet(e) {
  try {
    const productId = e.parameter.p;

    if (!productId) {
      return jsonResponse({
        error: "Missing product id"
      });
    }

    const product = getProductById(productId);

    if (!product) {
      return jsonResponse({
        error: "Product not found"
      });
    }

    return jsonResponse(product);

  } catch (error) {
    return jsonResponse({
      error: error.toString()
    });
  }
}

/**
 * get product by id
 */
function testgetProductById() { console.log(getProductById('PYbP2v5Q')); }
function getProductById(id) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Productos");

  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  for (let i = 1; i < data.length; i++) {
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
 * return json data
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
