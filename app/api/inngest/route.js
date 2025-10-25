
// // File: /pages/api/imgest.ts (or /app/api/imgest/route.ts for Next.js 13+)
// import { serve } from 'inngest/next';
// import { inngest } from '@/config/inngest';  // Ensure this exports `inngest` client
// import { 
//   syncUserCreation, 
//   syncUserUpdation, 
//   syncUserDeletion 
// } from '@/config/inngest';  // Import functions directly

// // Export the Inngest API handler
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     syncUserCreation,
//     syncUserUpdation,
//     syncUserDeletion
//   ],
// });



import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
