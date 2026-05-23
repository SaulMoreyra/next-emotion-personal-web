"use client";

import Reveal from "components/Reveal";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionLabel,
  SectionTitle,
} from "components/Section";
import Text from "components/Text";
import { languages, skills } from "data/skills";
import { useTranslations } from "next-intl";
import {
  SkillsWrap,
  SkillsInner,
  SkillsGrid,
  SkillChip,
  LanguagesRow,
  LanguageItem,
  LanguageDivider,
} from "./SkillsSection.styled";

const SkillsSection = () => {
  const t = useTranslations("skills");

  return (
    <Section id="skills">
      <SectionInner>
        <Reveal>
          <SectionHeader>
            <SectionLabel>{t("label")}</SectionLabel>
            <SectionTitle>{t("title")}</SectionTitle>
            <SectionDescription>{t("description")}</SectionDescription>
          </SectionHeader>
        </Reveal>
      </SectionInner>

      <SkillsWrap>
        <SkillsInner>
          <Reveal delay={80}>
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </SkillsGrid>
          </Reveal>

          <Reveal delay={160}>
            <Text variant="subtitle">{t("languagesTitle")}</Text>
            <LanguagesRow>
              {languages.map(({ id, level }, index) => (
                <LanguageItem key={id}>
                  {index > 0 && <LanguageDivider>·</LanguageDivider>}
                  <Text variant="subtitle">{t(`languages.${id}`)}</Text>
                  <Text variant="caption">{t(`levels.${level}`)}</Text>
                </LanguageItem>
              ))}
            </LanguagesRow>
          </Reveal>
        </SkillsInner>
      </SkillsWrap>
    </Section>
  );
};

export default SkillsSection;
