import { getRunner } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import ContentPageContentSection from "../../ContentPageContentSection";
import ContentPageTopSection from "../../ContentPageTopSection";

type Props = {
  params: { runner: string };
};

export default async function Runner({ params }: Props) {
  const runner = await getRunner(params.runner);
  if (!runner) return notFound();
  runner.image.alt = `Bild von ${runner.name}`;

  return (
    <div>
      <ContentPageTopSection image={runner.image} />
      <ContentPageContentSection title={runner.name}>
        <PortableText value={runner.bio} />
      </ContentPageContentSection>
    </div>
  );
}
