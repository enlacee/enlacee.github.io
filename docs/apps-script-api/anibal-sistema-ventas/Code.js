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
function testgetProductById(){console.log(getProductById('PYbP2v5Q'));}
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
function  saludarATitok(){
  console.log("hola tiktok");
}


