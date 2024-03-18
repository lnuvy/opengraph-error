import { VercelImage } from "@/public/images";
import {
  OpenGraph,
  OpenGraphType,
} from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

/** ------------------------------------------------------------------------------
 * 
 * 오픈그래프와 트위터 메타태그를 만족시켜주는 객체
 * 
 ------------------------------------------------------------------------------ */
interface OGProps {
  title?: string;
  description?: string;
  images?: string[];
  type?: OpenGraphType;
  addUrl?: string;
  card?: "summary_large_image" | "summary" | "player" | "app";
  authors?: null | string | URL | Array<string | URL>;
}

export const OG = (props: OGProps) => {
  const {
    type = "website",
    card = "summary_large_image",
    title = "DEFAULT_TITLE",
    description = "DEFAULT_DESCRIPTION",
    addUrl = "",
    images = [`localhost:3000/_next/image?url=${VercelImage.src}&w=2048&q=75`],
    authors = "lnuvy",
  } = props;

  return {
    openGraph: {
      title,
      description,
      images,
      url: process.env.NEXT_PUBLIC_SENSE_WEB_URL + addUrl,
      type,
      authors,
      siteName: "OG_TEST_SITE",
      countryName: "Seongnam-si, Gyeonggi-do, Korea",

      /** @see - If you define type as an "article", the emails will cause an error */
      // Error: r.map is not a function
      emails: "lnuvy.code@gmail.com",
    } satisfies OpenGraph,
    twitter: {
      title,
      description,
      images,
      card,
    } satisfies Twitter,
  };
};
