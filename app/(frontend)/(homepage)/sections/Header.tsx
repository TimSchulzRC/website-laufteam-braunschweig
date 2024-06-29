"use client";

import HeaderCarouselItem from "@/app/components/HeaderCarouselItem";
import PostData from "@/types/PostData";
import { Carousel } from "flowbite-react";
import { useCallback, useEffect, useMemo } from "react";
import Section from "../../../components/Section";

type Props = {
  recentPosts: PostData[];
};

export default function Header({ recentPosts }: Props) {
  const handelLeavingScreen = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const navLogo = document.getElementById("nav-logo");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLogo?.classList.add("lg:opacity-0");
        } else {
          navLogo?.classList.remove("lg:opacity-0");
        }
      });
    },
    []
  );

  const options = useMemo(
    () => ({
      root: null,
      // rootMargin: "0px",
      threshold: 0.7,
    }),
    []
  );

  useEffect(() => {
    const toObserve = document.getElementById("homepage-header-section");
    const observer = new IntersectionObserver(handelLeavingScreen, options);
    if (toObserve) observer.observe(toObserve);
    return () => {
      if (toObserve) observer.unobserve(toObserve);
    };
  }, [handelLeavingScreen, options]);

  return (
    <Section className="bg-darkBlue" id="homepage-header-section">
      <Carousel className="carousel" slide={false}>
        {recentPosts.map((post, index) => (
          <HeaderCarouselItem
            key={index}
            image={post.image}
            title={post.title}
            postSlug={post.slug}
          />
        ))}
      </Carousel>
    </Section>
  );
}
