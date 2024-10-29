import clientConfig from "@/sanity/config/client-config";
import { createClient, QueryParams } from "next-sanity";

const client = createClient(clientConfig);

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
      tags,
    },
  });
}
