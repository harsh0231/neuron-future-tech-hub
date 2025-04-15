
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
    
    // Get timestamp
    const timestamp = new Date();
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Course', 'Message']);
    }
    
    // Extract the form fields - using direct parameter access instead of entry.X format
    const name = params.name || '';
    const email = params.email || '';
    const phone = params.phone || '';
    const course = params.course || '';
    const message = params.message || '';
    
    // Append the form data to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      course,
      message
    ]);
    
    // Send email notification
    sendEmailNotification(name, email, phone, course, message);
    
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

// Function to send email notification
function sendEmailNotification(name, email, phone, course, message) {
  try {
    const emailSubject = "New Contact Form Submission - Neuron AI & Robotics";
    const emailBody = `
      New contact form submission received:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Interested In: ${course}
      Message: ${message}
      
      Timestamp: ${new Date().toString()}
    `;
    
    // Send email to the specified address
    GmailApp.sendEmail("info@neuron.org.in", emailSubject, emailBody);
    
    return true;
  } catch (error) {
    console.error("Error sending email notification:", error);
    return false;
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
