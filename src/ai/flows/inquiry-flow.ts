'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot be longer than 500 characters."
  }),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export async function submitInquiry(
  input: Inquiry
): Promise<{ success: boolean }> {
  return inquiryFlow(input);
}

const inquiryFlow = ai.defineFlow(
  {
    name: 'inquiryFlow',
    inputSchema: inquirySchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    // In a real application, you would add logic here to send the data to a Google Sheet.
    // For now, we will just log it to the console.
    console.log('New inquiry received:', input);
    
    // Here is where you would integrate with an external service like Google Sheets.
    // Example (requires additional setup with Google Cloud APIs and authentication):
    /*
    try {
      const {google} = require('googleapis');
      const sheets = google.sheets('v4');
      
      // NOTE: This part requires authentication to be configured.
      // See https://developers.google.com/sheets/api/quickstart/nodejs
      
      const auth = new google.auth.GoogleAuth({
          // Scopes and credentials would go here
      });
      const authClient = await auth.getClient();
      google.options({auth: authClient});

      const request = {
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            [input.name, input.email, input.phone, input.message, new Date().toISOString()]
          ],
        },
      };
      
      await sheets.spreadsheets.values.append(request);
      
      return { success: true };

    } catch (err) {
      console.error('Error writing to Google Sheet:', err);
      return { success: false };
    }
    */
    
    return { success: true };
  }
);
