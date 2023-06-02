"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  srcDefault: string | StaticImageData;
  srcTablet?: string;
  srcMobile?: string;
  tabletMedia?: number;
  mobileMedia?: number;
  alt: string;
}

export default function BackgroundImage({
  alt,
  srcDefault,
  srcMobile,
  srcTablet,
  tabletMedia,
  mobileMedia,
}: Props) {
  return (
    <picture className="absolute left-0 top-0 -z-10 w-full">
      {srcMobile && (
        <source
          media={`(max-width: ${mobileMedia || 375}px)`}
          srcSet={srcMobile}
        />
      )}
      {srcTablet && (
        <source
          media={`(max-width: ${tabletMedia || 768}px)}`}
          srcSet={srcTablet}
        />
      )}
      <Image src={srcDefault} priority alt={alt} />
    </picture>
  );
}
