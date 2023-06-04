import PlanetNavegationTabs from "@/components/destination/planet-navegation-tabs";
import BackgroundImage from "@/components/ui/background-image";
import backgroundImage from "@public/images/destination/background-destination-desktop.jpg";
import PageAnimation from "../pageAnimation";
import destinationData from "./destinations-data.json";

export default function Destination() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden p-6 tablet:pt-0 desktop:flex-row desktop:p-40">
      <BackgroundImage
        srcDefault={backgroundImage}
        srcTablet="/images/destination/background-destination-tablet.jpg"
        srcMobile="/images/destination/background-destination-mobile.jpg"
        alt="destination-background"
      />
      <PageAnimation>
        <article className="flex flex-col items-center gap-4 tablet:mt-[6.625rem] tablet:max-w-md tablet:gap-6 desktop:items-start">
          <p className="font-barlow-condensed text-nav uppercase">
            <span className="mr-4 font-bold opacity-25">01</span>
            pick your destination
          </p>
        </article>
        <PlanetNavegationTabs className="mt-7" destinations={destinationData} />
      </PageAnimation>
    </div>
  );
}
