import ContentPageContentSection from "@/components/page-components/ContentPageContentSection";
import { CONTACT_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/queries";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformation des Laufteam Braunschweig",
};

export default async function Kontakt() {
  const pageData = await sanityFetch<CONTACT_PAGE_QUERYResult>({
    query: CONTACT_PAGE_QUERY,
  });
  if (!pageData) return notFound();
  return (
    <ContentPageContentSection title="Kontaktinformationen">
      {pageData.contactInformation && (
        <PortableText value={pageData.contactInformation} />
      )}
    </ContentPageContentSection>
  );
}
