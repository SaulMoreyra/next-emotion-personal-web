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
import { awards, education } from "data/experience";
import { useTranslations } from "next-intl";
import {
  AboutLayout,
  BioPanel,
  BioLabel,
  SideStack,
  EducationBlock,
  EducationLabel,
  AwardsBlock,
  AwardsLabel,
  AwardList,
  AwardItem,
} from "./AboutSection.styled";

const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <Section id="about">
      <SectionInner>
        <Reveal>
          <SectionHeader>
            <SectionLabel>{t("label")}</SectionLabel>
            <SectionTitle>{t("title")}</SectionTitle>
            <SectionDescription>{t("description")}</SectionDescription>
          </SectionHeader>
        </Reveal>

        <AboutLayout>
          <Reveal delay={80}>
            <BioPanel>
              <BioLabel>{t("bioTitle")}</BioLabel>
              <Text variant="body">{t("bio")}</Text>
            </BioPanel>
          </Reveal>

          <SideStack>
            <Reveal delay={160}>
              <EducationBlock>
                <EducationLabel>{t("educationTitle")}</EducationLabel>
                <Text variant="subtitle">{education.institution}</Text>
                <Text variant="body">{education.degree}</Text>
                <Text variant="caption">{education.period}</Text>
              </EducationBlock>
            </Reveal>

            <Reveal delay={240}>
              <AwardsBlock>
                <AwardsLabel>{t("awardsTitle")}</AwardsLabel>
                <AwardList>
                  {awards.map((key) => (
                    <AwardItem key={key}>{t(`awards.${key}`)}</AwardItem>
                  ))}
                </AwardList>
              </AwardsBlock>
            </Reveal>
          </SideStack>
        </AboutLayout>
      </SectionInner>
    </Section>
  );
};

export default AboutSection;
