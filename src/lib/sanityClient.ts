import { createClient } from "@sanity/client";

export default createClient({
  projectId: "qd2nvb50", // <-- YOUR NEW ID
  dataset: "production",   // Your dataset
  useCdn: true,            // Uses cached data for speed
  apiVersion: "2024-07-15", // Use a current date
});
