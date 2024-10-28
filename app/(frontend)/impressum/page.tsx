import { IMPRESSUM_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { IMPRESSUM_PAGE_QUERY } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import ContentPageContentSection from "../ContentPageContentSection";

export async function generateMetadata() {
  const pageData = await sanityFetch<IMPRESSUM_PAGE_QUERYResult>({
    query: IMPRESSUM_PAGE_QUERY,
  });
  if (!pageData) return {};
  return {};
}

export default async function Impressum() {
  const pageData = await sanityFetch<IMPRESSUM_PAGE_QUERYResult>({
    query: IMPRESSUM_PAGE_QUERY,
  });
  if (!pageData) return notFound();
  return (
    <ContentPageContentSection title="Impressum">
      {pageData.impressum && <PortableText value={pageData.impressum} />}
    </ContentPageContentSection>
  );
}
