"use client";

import Reveal from "components/Reveal";
import ZenfiPhoneMockup from "components/PhoneMockup";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionLabel,
  SectionTitle,
} from "components/Section";
import { SimpleLink } from "components/Link";
import Text from "components/Text";
import { projects } from "data/projects";
import { useTranslations } from "next-intl";
import {
  ProjectsGrid,
  ProjectCard,
  ProjectLinks,
  StackList,
  StackChip,
  FeaturedBody,
  FeaturedMeta,
  FeaturedLabel,
  FeaturedTitle,
  FeaturedDescription,
  FeaturedLink,
  CompactIndex,
  FeaturedVisual,
} from "./ProjectsSection.styled";

const ProjectsSection = () => {
  const t = useTranslations("projects");
  let compactIndex = 0;

  return (
    <Section id="projects">
      <SectionInner>
        <Reveal>
          <SectionHeader>
            <SectionLabel>{t("label")}</SectionLabel>
            <SectionTitle>{t("title")}</SectionTitle>
            <SectionDescription>{t("description")}</SectionDescription>
          </SectionHeader>
        </Reveal>

        <ProjectsGrid>
          {projects.map((project, index) => {
            if (project.featured) {
              return (
                <Reveal key={project.id} delay={index * 80}>
                  <ProjectCard $featured>
                    <FeaturedBody>
                      <FeaturedLabel>{t("featuredLabel")}</FeaturedLabel>
                      <FeaturedTitle>
                        {t(`entries.${project.id}.title`)}
                      </FeaturedTitle>
                      <FeaturedDescription>
                        {t(`entries.${project.id}.description`)}
                      </FeaturedDescription>
                    </FeaturedBody>
                    <FeaturedVisual>
                      <ZenfiPhoneMockup />
                      <FeaturedMeta>
                        <StackList>
                          {project.stack.map((tech) => (
                            <StackChip key={tech} $featured>
                              {tech}
                            </StackChip>
                          ))}
                        </StackList>
                        {project.href && (
                          <FeaturedLink href={project.href} target="_blank">
                            {t("liveDemo")} →
                          </FeaturedLink>
                        )}
                      </FeaturedMeta>
                    </FeaturedVisual>
                  </ProjectCard>
                </Reveal>
              );
            }

            compactIndex += 1;

            return (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard>
                  <CompactIndex>
                    {String(compactIndex).padStart(2, "0")}
                  </CompactIndex>
                  <Text variant="subtitle">
                    {t(`entries.${project.id}.title`)}
                  </Text>
                  <Text variant="body">
                    {t(`entries.${project.id}.description`)}
                  </Text>
                  <StackList>
                    {project.stack.map((tech) => (
                      <StackChip key={tech}>{tech}</StackChip>
                    ))}
                  </StackList>
                  {(project.href || project.repo) && (
                    <ProjectLinks>
                      {project.href && (
                        <SimpleLink href={project.href} target="_blank">
                          {t("liveDemo")}
                        </SimpleLink>
                      )}
                      {project.repo && (
                        <SimpleLink href={project.repo} target="_blank">
                          {t("sourceCode")}
                        </SimpleLink>
                      )}
                    </ProjectLinks>
                  )}
                </ProjectCard>
              </Reveal>
            );
          })}
        </ProjectsGrid>
      </SectionInner>
    </Section>
  );
};

export default ProjectsSection;
