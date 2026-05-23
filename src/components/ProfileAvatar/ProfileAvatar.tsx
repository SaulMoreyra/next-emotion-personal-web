"use client";

import Image from "next/image";
import { ProfileFrame, ProfileGlow } from "./ProfileAvatar.styled";

const ProfileAvatar = () => {
  return (
    <ProfileFrame aria-hidden>
      <ProfileGlow />
      <Image
        src="/images/profile.svg"
        alt=""
        width={320}
        height={320}
        priority
        sizes="(max-width: 768px) 240px, 320px"
      />
    </ProfileFrame>
  );
};

export default ProfileAvatar;
