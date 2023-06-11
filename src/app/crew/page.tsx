import CrewSlider from "@/components/crew/crew-slider";
import PageContainer from "@/components/ui/page-container";
import backgroundImageSrc from "@public/images/crew/background-crew-desktop.jpg";
import BackgroundImage from "@ui/background-image";

const backgroundImg = (
  <BackgroundImage
    srcDefault={backgroundImageSrc}
    srcTablet="/images/crew/background-crew-tablet.jpg"
    srcMobile="/images/crew/background-crew-mobile.jpg"
    alt="crew-background-space"
  />
);

export default function Crew() {
  return (
    <PageContainer backgroundImg={backgroundImg} className="p-6">
      <article className="flex flex-col items-center gap-4 tablet:mt-[6.625rem] tablet:max-w-md tablet:gap-6 desktop:items-start">
        <p className="font-barlow-condensed text-nav uppercase">
          <span className="mr-4 font-bold opacity-25">02</span>
          meet your crew
        </p>
      </article>
      <CrewSlider />
    </PageContainer>
  );
}
