"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ProfileFrame, ProfileGlow } from "./ProfileAvatar.styled";

const ProfileAvatar = () => {
  const t = useTranslations("presentation");

  return (
    <ProfileFrame>
      <ProfileGlow />
      <Image
        src="/images/profile.jpg"
        alt={t("profileAlt")}
        width={682}
        height={1024}
        priority
        sizes="(max-width: 768px) 240px, 320px"
      />
    </ProfileFrame>
  );
};

export default ProfileAvatar;
