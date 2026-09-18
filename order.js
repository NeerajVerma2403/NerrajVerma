function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Order System")
    .addItem("Open Order Form", "openForm")
    .addToUi();
}

// Open HTML Form
function openForm() {
  var html = HtmlService.createHtmlOutputFromFile("orderForm")
    .setWidth(400)
    .setHeight(500);
  SpreadsheetApp.getUi().showModalDialog(html, "Food Order");
}

// Fetch Menu Items from Menu Sheet
function getMenuItems(counter) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Menu");
  var data = sheet.getDataRange().getValues();
  var items = [];
  data.forEach(function(row, i) {
    if (i > 0 && row[0] == counter) {
      items.push({ name: row[1], price: row[2] });
    }
  });
  return items;
}

// Save Order to Orders Sheet
function saveOrder(data) {
  var menuSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Menu");
  var orderSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders");

  // Get Price
  var dataRange = menuSheet.getDataRange().getValues();
  var price = 0;
  dataRange.forEach(function(row, i) {
    if (row[0] == data.counter && row[1] == data.food) {
      price = row[2];
    }
  });

  var subtotal = price;
  var gst = subtotal * 0.05;
  var total = subtotal + gst;

  // Save in Orders sheet
  orderSheet.appendRow([
    new Date(),
    data.name,
    data.mobile,
    data.counter,
    data.food,
    subtotal,
    gst,
    total
  ]);

  return "Order Saved! Bill Total: ₹" + total.toFixed(2);
}
