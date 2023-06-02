import BackgroundImage from "@ui/background-image";
import backgroundImageSrc from "@public/images/crew/background-crew-desktop.jpg";
import PageAnimation from "../pageAnimation";

export default function Crew() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 tablet:pt-0 desktop:flex-row desktop:p-40">
      <BackgroundImage
        srcDefault={backgroundImageSrc}
        srcTablet="/images/crew/background-crew-tablet.jpg"
        srcMobile="/images/crew/background-crew-mobile.jpg"
        alt="crew-background-space"
      />
      <PageAnimation>
        <article className="flex flex-col items-center gap-4 tablet:mt-[6.625rem] tablet:max-w-md tablet:gap-6 desktop:items-start">
          <p className="font-barlow-condensed text-nav uppercase">
            <span className="mr-4 font-bold opacity-25">01</span>
            pick your destination
          </p>
        </article>
      </PageAnimation>
    </div>
  );
}
