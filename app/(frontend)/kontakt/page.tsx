import { CONTACT_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import ContentPageContentSection from "../ContentPageContentSection";

export async function generateMetadata() {
  const pageData = await sanityFetch<CONTACT_PAGE_QUERYResult>({
    query: CONTACT_PAGE_QUERY,
  });
  if (!pageData) return {};
  return {};
}

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
