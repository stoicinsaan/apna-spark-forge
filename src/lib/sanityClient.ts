import { createClient } from "@sanity/client";

export default createClient({
  projectId: "o0ousbqs", // <-- Yeh aapki NAYI ID hai
  dataset: "production",   // Aapka dataset
  useCdn: true,            // Speed ke liye cached data
  apiVersion: "2024-07-15", // Aaj ki date
});
