import { fetchData, filterByCategory } from '../sheets/helper';

export async function GET() {
  try {
    const data = await fetchData(); // Fetch data (cached data will be used after the first call)
    
    // Filter data by category (Movies)
    const movies = filterByCategory(data, 'Movies');

    return new Response(JSON.stringify({
      message: 'Movies data fetched successfully',
      data: movies,
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    if (error instanceof Error) {
        throw new Error('Error fetching data from Google Sheets: ' + error.message);
      }
    throw new Error('Unknown error occurred');
  }
}
