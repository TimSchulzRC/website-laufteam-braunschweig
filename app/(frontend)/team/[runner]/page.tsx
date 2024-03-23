import { getRunner } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import ContentPageContentSection from "../../ContentPageContentSection";
import ContentPageTopSection from "../../ContentPageTopSection";

type Props = {
  params: { runner: string };
};

export default async function Runner({ params }: Props) {
  const runner = await getRunner(params.runner);

  return (
    <div>
      <ContentPageTopSection image={runner.image} />
      <ContentPageContentSection title={runner.name}>
        <PortableText value={runner.bio} />
      </ContentPageContentSection>
    </div>
  );
}
