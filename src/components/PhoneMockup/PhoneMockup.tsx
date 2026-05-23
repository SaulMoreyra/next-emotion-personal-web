"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MockupWrap, PhoneBezel, PhoneScreen } from "./PhoneMockup.styled";

const ZenfiPreview = () => {
  const t = useTranslations("projects");

  return (
    <MockupWrap>
      <PhoneBezel>
        <PhoneScreen>
          <Image
            src="/images/projects/zenfi-preview.jpg"
            alt={t("zenfiPreviewAlt")}
            width={472}
            height={1024}
            sizes="(max-width: 768px) 220px, 280px"
          />
        </PhoneScreen>
      </PhoneBezel>
    </MockupWrap>
  );
};

export default ZenfiPreview;
