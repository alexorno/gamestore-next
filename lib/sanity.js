import {createClient} from "@sanity/client";
// import sanity from "../lib/sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "dqvsoeaz",
  dataset: "production",
  apiVersion: '2023-04-12',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});


const imageBuilder = ImageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);

// export default imageUrlFor;