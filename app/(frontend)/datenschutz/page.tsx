import ContentPageContentSection from "@/components/page-components/ContentPageContentSection";
import { DATENSCHUTZ_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { DATENSCHUTZ_PAGE_QUERY } from "@/sanity/queries";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Website des Laufteam Braunschweig",
};

export default async function Datenschutz() {
  const pageData = await sanityFetch<DATENSCHUTZ_PAGE_QUERYResult>({
    query: DATENSCHUTZ_PAGE_QUERY,
  });
  if (!pageData) return notFound();
  return (
    <ContentPageContentSection title="Datenschutzerklärung">
      {pageData.datenschutzerklaerung && (
        <PortableText value={pageData.datenschutzerklaerung} />
      )}
    </ContentPageContentSection>
  );
}
