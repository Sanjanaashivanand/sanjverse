import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Path to the credentials file
const credentialsPath = 'credentials.json';

const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath, // Path to your service account key file
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'], // Read-only access to Sheets
    });

async function fetchData() {
    try {
      const sheets = google.sheets({version:"v4", auth});
      const spreadsheetId = "1cMXIB4tOP-Q5Vd3Cc9KbspBaoIbcIMkPyKX54dcvPxU";
      const range = 'Sheet1!A:G';

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range
      });

      return response.data.values ?? [];
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching data from Google Sheets: ' + error.message);
          }
        throw new Error('Unknown error occurred');
    }
  }

// Filter rows by category (Movies, Books, etc.)
function filterByCategory(rows: any[], category: string) {
    return rows.filter(row => row[1]?.toLowerCase() === category.toLowerCase()); // Assuming column A is the category column
}

// Exporting helper functions for other API routes
export { fetchData, filterByCategory };