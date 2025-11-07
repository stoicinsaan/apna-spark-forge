import { createClient } from "@sanity/client";

export default createClient({
  projectId: "geo27mp6", // Your Project ID
  dataset: "production",   // Your dataset
  useCdn: true,            // Uses cached data for speed
  apiVersion: "2024-07-15", // Use a current date
});
