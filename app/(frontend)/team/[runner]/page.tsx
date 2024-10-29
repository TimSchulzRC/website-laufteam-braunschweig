import ContentPageContentSection from "@/components/page-components/ContentPageContentSection";
import ContentPageTopSection from "@/components/page-components/ContentPageTopSection";
import { RUNNER_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { RUNNER_QUERY } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
  params: { runner: string };
};

export async function generateMetadata({ params }: Props) {
  const runner = await sanityFetch<RUNNER_QUERYResult>({
    query: RUNNER_QUERY,
    params: { slug: params.runner },
  });
  if (!runner) return {};
  return {
    title: runner.name,
    description: runner.name,
  };
}

export default async function Runner({ params }: Props) {
  const runner = await sanityFetch<RUNNER_QUERYResult>({
    query: RUNNER_QUERY,
    params: { slug: params.runner },
  });
  if (!runner) return notFound();

  return (
    <div>
      <ContentPageTopSection image={runner.image} />
      <ContentPageContentSection title={runner.name}>
        <PortableText value={runner.bio!} />
      </ContentPageContentSection>
    </div>
  );
}
