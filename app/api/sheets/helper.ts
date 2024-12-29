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
      const range = 'Sheet1!A:H';

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

  interface MediaRow {
    timestamp: string;
    category: string;
    title: string;
    artistName: string;
    rating: number;
    review: string;
    image_url: string;
  }
  
// Filter rows by category (Movies, Books, etc.)
function filterByCategory(rows: any[], category: string): MediaRow[] {
  return rows
    .filter(row => row[1]?.toLowerCase() === category.toLowerCase()) // Assuming column 1 is the category column
    .map((row): MediaRow => ({
      timestamp: row[0], // Assuming column 0 is the timestamp
      category: row[1],  // Assuming column 1 is the category
      title: row[2],     // Assuming column 2 is the title
      artistName: row[3], // Assuming column 3 is the artist name
      rating: row[4],     // Assuming column 4 is the rating
      review: row[5],      // Assuming column 5 is the review
      image_url: row[7],
    }));
}


// Exporting helper functions for other API routes
export { fetchData, filterByCategory };