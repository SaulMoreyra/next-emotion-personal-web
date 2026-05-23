"use client";

import Reveal from "components/Reveal";
import {
  Section,
  SectionInner,
  SectionLabel,
} from "components/Section";
import { socialLinks } from "data/contact";
import { useTranslations } from "next-intl";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "components/Icons";
import {
  ContactBanner,
  ContactCopy,
  ContactTitle,
  ContactDescription,
  ContactLinks,
  SocialButton,
  AvailabilityNote,
} from "./ContactSection.styled";

const iconMap = {
  linkedin: IconLinkedin,
  github: IconGithub,
  instagram: IconInstagram,
  facebook: IconFacebook,
};

const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <Section id="contact">
      <SectionInner>
        <Reveal>
          <SectionLabel>{t("label")}</SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <ContactBanner>
            <ContactCopy>
              <ContactTitle>{t("title")}</ContactTitle>
              <ContactDescription>{t("socialDescription")}</ContactDescription>
            </ContactCopy>
            <ContactLinks>
              {socialLinks.map(({ href, label, id }) => {
                const Icon = iconMap[id as keyof typeof iconMap];
                return (
                  <SocialButton
                    key={id}
                    href={href}
                    target="_blank"
                    aria-label={label}
                  >
                    {Icon ? <Icon size={20} color="currentColor" /> : label}
                  </SocialButton>
                );
              })}
            </ContactLinks>
          </ContactBanner>
        </Reveal>

        <Reveal delay={160}>
          <AvailabilityNote>{t("availabilityDescription")}</AvailabilityNote>
        </Reveal>
      </SectionInner>
    </Section>
  );
};

export default ContactSection;
