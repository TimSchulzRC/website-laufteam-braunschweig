import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
      "headerImage": {
        "url": headerImage.asset->url,
        "width": headerImage.asset->metadata.dimensions.width,
        "height": headerImage.asset->metadata.dimensions.height,
        "alt": headerImageAlt
      },
      linkCards[]{
        title,
        description,
        "image": {
          "url": image.asset->url,
          "width": image.asset->metadata.dimensions.width,
          "height": image.asset->metadata.dimensions.height,
          "alt": imageAlt
        },
        link
      }
    }`;

export const ABOUT_US_PAGE_QUERY = groq`*[_type == "aboutUs-page"][0]{
      title,
      subtitle,
      infotext,
      sections,
      "image": {
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "alt": imageAlt
      }
    }`;

export const NEWS_PAGE_QUERY = groq`*[_type == "news-page"][0]{
      title,
      subtitle,
      infotext,
      "image": {
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "alt": imageAlt
      }
    }`;

export const TEAM_PAGE_QUERY = groq`*[_type == "team-page"][0]{
      title,
      subtitle,
      infotext,
      "image": {
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "alt": imageAlt
      }
    }`;

export const POSTS_QUERY = groq`*[_type == "post" ]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": image.asset->url,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "alt": imageAlt
        },
        publishedAt,
        location,
        runners[]->{
            name
        },
        body
    }`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": image.asset->url,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "alt": imageAlt
        },
        publishedAt,
        location,
        runners[]->{
            name
        },
        body
    }`;

export const MOST_RECENT_POSTS_QUERY = groq`*[_type == "post" ] | order(publishedAt desc) [0...3]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": image.asset->url,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "alt": imageAlt
        },
        publishedAt,
        location,
        runners[]->{
            name
        },
        body
    }`;

export const RUNNERS_QUERY = groq`*[_type == "runner" ]{
        _id,
        name,
        "slug": slug.current,
        "image": {
          "url": image.asset->url,
          "width": image.asset->metadata.dimensions.width,
          "height": image.asset->metadata.dimensions.height,
          "alt": imageAlt
        },
        hallOfFame,
        bio,
        infotext,
    }`;

export const RUNNER_QUERY = groq`*[_type == "runner" && slug.current == $slug][0]{
        _id,
        name,
        "slug": slug.current,
        "image": {
          "url": image.asset->url,
          "width": image.asset->metadata.dimensions.width,
          "height": image.asset->metadata.dimensions.height,
          "alt": "Bild von " + name
        },
        bio,
        infotext,
        birthDate
    }`;
