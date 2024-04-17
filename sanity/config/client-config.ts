const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const clientConfig = {
  projectId,
  dataset,
  apiVersion: "2021-03-25",
};

export default clientConfig;
