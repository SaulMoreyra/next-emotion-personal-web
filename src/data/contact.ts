import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "components/Icons";
import { IconProps } from "interfaces/Icons";
import { socialLinksData } from "./socialLinks";

export type SocialLink = {
  id: string;
  href: string;
  label: string;
  icon: (iconProps: IconProps) => JSX.Element;
};

const socialIcons: Record<
  (typeof socialLinksData)[number]["id"],
  (iconProps: IconProps) => JSX.Element
> = {
  linkedin: IconLinkedin,
  github: IconGithub,
  instagram: IconInstagram,
  facebook: IconFacebook,
};

export const socialLinks: SocialLink[] = socialLinksData.map((link) => ({
  ...link,
  icon: socialIcons[link.id as keyof typeof socialIcons],
}));
