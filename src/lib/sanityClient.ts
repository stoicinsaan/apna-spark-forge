import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ✅ Define the client configuration
const config: ClientConfig = {
  projectId: "7ztroj6e",         // 🔹 Your Apna Growth Media Sanity project ID
  dataset: "production",         // 🔹 Dataset name (default: production)
  apiVersion: "2025-01-01",      // 🔹 Use the latest API date (or today's date)
  useCdn: true,                  // 🔹 Faster cached responses
};

// ✅ Create the Sanity client
export const sanityClient = createClient(config);

// ✅ Image URL builder helper
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// ✅ Default export for compatibility
export default sanityClient;
