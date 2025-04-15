
// This is just a reference file that needs to be deployed as a Google Apps Script
// associated with the target Google Sheet

function doPost(e) {
  try {
    // Get the form data
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
      params['entry.2005620554'],  // Name
      params['entry.1045781291'],  // Email
      params['entry.1166974658'],  // Phone
      params['entry.1065046570'],  // Course
      params['entry.839337160']    // Message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('The script is running properly.');
}
