const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const clientConfig = {
  projectId,
  dataset,
  apiVersion: "2024-06-06",
};

export default clientConfig;
