import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
      headerImage,
      headerText,
      linkCards[]{
        title,
        description,
        image,
        link
      }
    }`;

export const ABOUT_US_PAGE_QUERY = groq`*[_type == "aboutUs-page"][0]{
      title,
      subtitle,
      infotext,
      sections,
      image
    }`;

export const NEWS_PAGE_QUERY = groq`*[_type == "news-page"][0]{
      title,
      subtitle,
      infotext,
      image
    }`;

export const TEAM_PAGE_QUERY = groq`*[_type == "team-page"][0]{
      title,
      subtitle,
      infotext,
      image
    }`;

export const CONTACT_PAGE_QUERY = groq`*[_type == "contact-page"][0]{
      contactInformation
    }`;

export const DATENSCHUTZ_PAGE_QUERY = groq`*[_type == "datenschutz-page"][0]{
      datenschutzerklaerung
    }`;

export const IMPRESSUM_PAGE_QUERY = groq`*[_type == "impressum-page"][0]{
      impressum
    }`;

export const POSTS_QUERY = groq`*[_type == "post" ]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        image,
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
        image,
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
        image,
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
        image,
        hallOfFame,
        bio,
        infotext,
    }`;

export const RUNNER_QUERY = groq`*[_type == "runner" && slug.current == $slug][0]{
        _id,
        name,
        "slug": slug.current,
        image,
        bio,
        infotext,
        birthDate
    }`;
