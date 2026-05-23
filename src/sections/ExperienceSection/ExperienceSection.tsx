"use client";

import { useState } from "react";
import Reveal from "components/Reveal";
import Button from "components/Button";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionLabel,
  SectionTitle,
} from "components/Section";
import Text from "components/Text";
import { SimpleLink } from "components/Link";
import { experience } from "data/experience";
import { getCompanyInitials } from "utils/companyInitials";
import { useTranslations } from "next-intl";
import {
  Timeline,
  TimelineLine,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  RoleList,
  RoleItem,
  CompanyRow,
  CompanyIdentity,
  CompanyLogo,
  PeriodBadge,
  HighlightLink,
  HighlightText,
  HighlightSubtitle,
  ExpandActions,
} from "./ExperienceSection.styled";

const VISIBLE_COUNT = 5;

const ExperienceSection = () => {
  const t = useTranslations("experience");
  const [expanded, setExpanded] = useState(false);
  const hasHiddenEntries = experience.length > VISIBLE_COUNT;

  const visibleExperience = expanded
    ? experience
    : experience.slice(0, VISIBLE_COUNT);

  return (
    <Section id="experience">
      <SectionInner>
        <Reveal>
          <SectionHeader>
            <SectionLabel>{t("label")}</SectionLabel>
            <SectionTitle>{t("title")}</SectionTitle>
            <SectionDescription>{t("description")}</SectionDescription>
          </SectionHeader>
        </Reveal>

        <Timeline>
          <TimelineLine aria-hidden />
          {visibleExperience.map((entry, index) => {
            const isHighlight = entry.highlight;

            return (
              <TimelineItem key={entry.id}>
                <TimelineMarker $highlight={isHighlight} />
                <Reveal delay={index * 60}>
                  <TimelineContent $highlight={isHighlight}>
                    <CompanyRow>
                      <CompanyIdentity>
                        <CompanyLogo $highlight={isHighlight}>
                          {getCompanyInitials(entry.company)}
                        </CompanyLogo>
                        {entry.companyUrl ? (
                          isHighlight ? (
                            <HighlightLink
                              href={entry.companyUrl}
                              target="_blank"
                            >
                              {entry.company}
                            </HighlightLink>
                          ) : (
                            <SimpleLink href={entry.companyUrl} target="_blank">
                              {entry.company}
                            </SimpleLink>
                          )
                        ) : isHighlight ? (
                          <HighlightSubtitle>{entry.company}</HighlightSubtitle>
                        ) : (
                          <Text variant="subtitle">{entry.company}</Text>
                        )}
                      </CompanyIdentity>
                      <PeriodBadge $highlight={isHighlight}>
                        {entry.period}
                      </PeriodBadge>
                    </CompanyRow>

                    {isHighlight ? (
                      <HighlightText $muted>{entry.location}</HighlightText>
                    ) : (
                      <Text variant="caption">{entry.location}</Text>
                    )}

                    <RoleList>
                      {entry.roles.map((role) => (
                        <RoleItem key={`${entry.id}-${role.title}`}>
                          {isHighlight ? (
                            <>
                              <HighlightText>{role.title}</HighlightText>
                              <HighlightText $muted>{role.period}</HighlightText>
                            </>
                          ) : (
                            <>
                              <Text variant="body">{role.title}</Text>
                              <Text variant="caption">{role.period}</Text>
                            </>
                          )}
                        </RoleItem>
                      ))}
                    </RoleList>

                    {isHighlight ? (
                      <HighlightText>{t(`entries.${entry.id}`)}</HighlightText>
                    ) : (
                      <Text variant="body">{t(`entries.${entry.id}`)}</Text>
                    )}
                  </TimelineContent>
                </Reveal>
              </TimelineItem>
            );
          })}
        </Timeline>

        {hasHiddenEntries && (
          <ExpandActions>
            <Button
              type="secondary"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
            >
              {expanded ? t("showLess") : t("showMore")}
            </Button>
          </ExpandActions>
        )}
      </SectionInner>
    </Section>
  );
};

export default ExperienceSection;
