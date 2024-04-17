import HeaderCarouselItem from "@/app/components/HeaderCarouselItem";
import PostData from "@/types/PostData";
import { Carousel } from "flowbite-react";
import Section from "../../../components/Section";

type Props = {
  recentPosts: PostData[];
};

export default function Header({ recentPosts }: Props) {
  return (
    <Section className="bg-darkBlue">
      <Carousel className="carousel" slide={false}>
        {recentPosts.map((post, index) => (
          <HeaderCarouselItem
            key={index}
            imgURL={post.image.url}
            title={post.title}
            imgAlt={post.image.alt}
            postSlug={post.slug}
          />
        ))}
      </Carousel>
    </Section>
  );
}
