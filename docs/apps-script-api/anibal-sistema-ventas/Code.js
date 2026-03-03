/**
 * Create menu for create unique ID
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("⚙️ Admin Tools")
    .addItem("Generate Product ID", "generarIdFilaActual")
    .addToUi();
}

function generarIdFilaActual() {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== "Productos") return;

  const row = sheet.getActiveRange().getRow();
  if (row === 1) return;

  const ID_COL = 1;
  const idCell = sheet.getRange(row, ID_COL);

  if (idCell.getValue()) {
    SpreadsheetApp.getActive().toast("Esta fila ya tiene ID");
    return;
  }

  const newId = generateId();

  idCell.setValue(newId);

  SpreadsheetApp.getActive().toast("ID generado");
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
      sheet.appendRow(["Timestamp", "Producto ID", "Producto Nombre", "Soles", "Dólares", "Nombre Cliente", "Email Cliente", "Transacción ID", "Captura Link"]);
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
      data.soles,
      data.dollars,
      data.customerName,
      data.customerEmail,
      data.transactionId,
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
    const folderName = "Capturas_Pagos_Pasarela";
    const folders = DriveApp.getFoldersByName(folderName);
    let folder;

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }

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
