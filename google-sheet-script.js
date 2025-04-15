
// This script needs to be deployed as a Google Apps Script
// associated with the target Google Sheet (ID: 14CXjmdMoz4ww5TgrgoDvrMbKgY9e7lHRzg4dCtf83BY)

function doPost(e) {
  try {
    // Log the incoming parameters for debugging
    console.log("Received parameters:", JSON.stringify(e.parameter));
    
    // Get the form data from parameters
    const params = e.parameter;
    
    // Open the Google Sheet by ID
    const ss = SpreadsheetApp.openById('14CXjmdMoz4ww5TgrgoDvrMbKgY9e7lHRzg4dCtf83BY');
    const sheet = ss.getSheetByName('Form Responses') || ss.insertSheet('Form Responses');
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Course', 'Message']);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([
      new Date(),
      params['entry.2005620554'] || '',  // Name
      params['entry.1045781291'] || '',  // Email
      params['entry.1166974658'] || '',  // Phone
      params['entry.1065046570'] || '',  // Course
      params['entry.839337160'] || ''    // Message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error("Error in form submission:", error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This function allows testing if the deployment is working
function doGet() {
  return ContentService.createTextOutput('The Google Sheet script is running properly.');
}

// Test function to verify spreadsheet access
function testSpreadsheetAccess() {
  try {
    const ss = SpreadsheetApp.openById('14CXjmdMoz4ww5TgrgoDvrMbKgY9e7lHRzg4dCtf83BY');
    const sheet = ss.getSheetByName('Form Responses') || ss.insertSheet('Form Responses');
    sheet.getRange('A1').setValue('Test successful at ' + new Date());
    return 'Spreadsheet access successful';
  } catch (error) {
    return 'Spreadsheet access failed: ' + error.toString();
  }
}
