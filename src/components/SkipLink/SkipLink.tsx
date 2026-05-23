"use client";

import { useTranslations } from "next-intl";
import { useNav } from "providers/NavProvider";
import { MouseEventHandler } from "react";

const SkipLink = () => {
  const t = useTranslations("common");
  const { scrollTo } = useNav();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    scrollTo("hero");
    document.getElementById("main-content")?.focus();
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      {t("skipToContent")}
    </a>
  );
};

export default SkipLink;
