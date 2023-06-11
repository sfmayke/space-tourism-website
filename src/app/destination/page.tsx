import type { PlanetObj } from "@/components/destination/planet-navegation";
import PlanetNavegation from "@/components/destination/planet-navegation";
import BackgroundImage from "@/components/ui/background-image";
import PageContainer from "@/components/ui/page-container";
import backgroundImage from "@public/images/destination/background-destination-desktop.jpg";
import destinationData from "./destinations-data.json";

const backgroundImg = (
  <BackgroundImage
    srcDefault={backgroundImage}
    srcTablet="/images/destination/background-destination-tablet.jpg"
    srcMobile="/images/destination/background-destination-mobile.jpg"
    alt="destination-background"
  />
);

export default function Destination() {
  return (
    <PageContainer
      backgroundImg={backgroundImg}
      className="flex flex-col items-center justify-between overflow-x-hidden p-6 
      tablet:px-10 tablet:pt-0 
      desktop:flex-row desktop:px-40 desktop:pb-28 desktop:pt-[76px]"
    >
      <article className="flex flex-col items-center gap-4 tablet:mt-10 tablet:max-w-md tablet:gap-6 desktop:items-start">
        <p className="font-barlow-condensed text-nav uppercase tablet:self-start tablet:text-xl tablet:leading-6">
          <span className="mr-4 font-bold">01</span>
          pick your destination
        </p>
      </article>
      <PlanetNavegation
        className="desktop:flex"
        destinations={destinationData as PlanetObj}
      />
    </PageContainer>
  );
}
