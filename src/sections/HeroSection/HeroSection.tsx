"use client";

import { useTranslations } from "next-intl";
import Reveal from "components/Reveal";
import { useNav } from "providers/NavProvider";
import Button from "components/Button";
import ProfileAvatar from "components/ProfileAvatar";
import { socialLinks } from "data/contact";
import IconLink from "components/IconLink";
import Text from "components/Text";
import { IconArrowDown } from "components/Icons";
import {
  HeroSection as Section,
  HeroInner,
  HeroLayout,
  HeroContent,
  HeroVisual,
  HeroMeta,
  HeroActions,
  SocialRow,
  StatusBadge,
  ScrollHint,
} from "./HeroSection.styled";

const HeroSection = () => {
  const t = useTranslations("presentation");
  const { scrollTo } = useNav();

  return (
    <Section id="hero">
      <HeroInner>
        <HeroLayout>
          <HeroContent>
            <Reveal delay={0}>
              <StatusBadge>{t("status")}</StatusBadge>
            </Reveal>
            <Reveal delay={80}>
              <Text variant="display">{t("hello")}</Text>
            </Reveal>
            <Reveal delay={120}>
              <Text variant="subtitle">{t("role")}</Text>
            </Reveal>
            <Reveal delay={160}>
              <HeroMeta>
                <Text variant="body">{t("place")}</Text>
              </HeroMeta>
            </Reveal>
            <Reveal delay={200}>
              <Text variant="body">{t("intro")}</Text>
            </Reveal>
            <Reveal delay={240}>
              <Text variant="body">{t("outro")}</Text>
            </Reveal>
            <Reveal delay={280}>
              <HeroActions>
                <Button type="primary" onClick={() => scrollTo("contact")}>
                  {t("contactCta")}
                </Button>
                <Button type="secondary" onClick={() => scrollTo("projects")}>
                  {t("projectsCta")}
                </Button>
              </HeroActions>
            </Reveal>
            <Reveal delay={320}>
              <SocialRow>
                {socialLinks.map(({ href, icon, label, id }) => (
                  <IconLink
                    key={id}
                    href={href}
                    target="_blank"
                    icon={icon}
                    aria-label={label}
                  />
                ))}
              </SocialRow>
            </Reveal>
          </HeroContent>
          <HeroVisual>
            <Reveal delay={120}>
              <ProfileAvatar />
            </Reveal>
          </HeroVisual>
        </HeroLayout>
        <ScrollHint
          type="button"
          onClick={() => scrollTo("about")}
          aria-label={t("scrollHint")}
        >
          <IconArrowDown />
        </ScrollHint>
      </HeroInner>
    </Section>
  );
};

export default HeroSection;
