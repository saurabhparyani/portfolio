import { SOCIALS } from "@/constants/content";

export const SITE_URL = "https://saurabhparyani.dev/";
export const SITE_NAME = "Saurabh Paryani";
export const SITE_TITLE = "Saurabh Paryani | Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Saurabh Paryani is a full-stack developer building a modern group chat app at Tribe with React Native and Ruby on Rails.";
export const OG_IMAGE = `${SITE_URL}portfolio.png`;
export const OG_IMAGE_WIDTH = 1097;
export const OG_IMAGE_HEIGHT = 738;
export const TWITTER_HANDLE = "@saurabhbuilds";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": SITE_NAME,
  "url": SITE_URL,
  "jobTitle": "Full-Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Tribe",
    "url": "https://tribechat.com/",
  },
  "sameAs": SOCIALS.map((social) => social.link),
};
