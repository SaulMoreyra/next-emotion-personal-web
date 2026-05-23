"use client";

import Reveal from "components/Reveal";
import { useTranslations } from "next-intl";
import {
  StatsBand,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel,
} from "./StatsSection.styled";

const STAT_KEYS = ["years", "companies", "currentRole", "focus"] as const;

const StatsSection = () => {
  const t = useTranslations("stats");

  return (
    <StatsBand>
      <StatsGrid>
        {STAT_KEYS.map((key, index) => (
          <Reveal key={key} delay={index * 60}>
            <StatItem>
              <StatValue>{t(`${key}.value`)}</StatValue>
              <StatLabel>{t(`${key}.label`)}</StatLabel>
            </StatItem>
          </Reveal>
        ))}
      </StatsGrid>
    </StatsBand>
  );
};

export default StatsSection;
