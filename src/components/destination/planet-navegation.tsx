"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Divider from "@ui/divider";
import Image from "next/image";
import { useState } from "react";
import SlideAnimation from "../ui/slide-animation";
import PlanetInfo from "./planet-info";

type Planet = {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
};

export type PlanetObj = {
  [k: string]: Planet;
};

interface Props {
  destinations: PlanetObj;
  className?: string;
  tabRootStyle?: string;
}

export default function PlanetNavegation({
  className,
  tabRootStyle,
  destinations,
}: Props) {
  const [selectedPlanet, setSelectedPlanet] = useState(
    destinations[Object.keys(destinations)[0]]
  );

  return (
    <div className={className}>
      <SlideAnimation
        motionKey={selectedPlanet.name}
        className="relative mx-auto mt-8 h-44 w-44 
        tablet:mt-16 tablet:h-[300px] tablet:w-[300px] 
        desktop:mt-0 desktop:h-[445px] desktop:w-[445px]"
      >
        <Image
          priority
          src={selectedPlanet.image}
          sizes="(max-width: 425px) 25vw, (max-width: 768px) 30vw, 100vw"
          alt="moon-planet"
          fill
        />
      </SlideAnimation>
      <Tabs.Root
        onValueChange={(planet) => setSelectedPlanet(destinations[planet])}
        className={tabRootStyle}
        defaultValue={selectedPlanet.name}
      >
        <Tabs.List
          aria-label="Choose your destination"
          className="flex justify-center gap-6"
        >
          {Object.values(destinations).map(({ name, distance }) => (
            <Tabs.Trigger
              key={distance}
              className="relative font-barlow-condensed text-sh2 uppercase before:absolute
              before:-bottom-2 before:h-[3px] before:bg-white before:transition-transform data-[state=active]:before:w-full
              desktop:text-nav"
              value={name}
            >
              {name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <SlideAnimation
          motionKey={selectedPlanet.distance + selectedPlanet.travel}
        >
          <Tabs.Content
            forceMount
            value={selectedPlanet.name}
            key={selectedPlanet.travel}
            className="desktop:flex desktop:flex-col desktop:items-start"
          >
            <h1 className="mt-7 flex justify-center text-h3 uppercase tablet:mt-9 desktop:mt-10 desktop:text-h2">
              {selectedPlanet.name}
            </h1>
            <p
              className="text-center font-barlow text-[15px] leading-6 text-secondary 
              tablet:mt-2 tablet:max-w-[35rem] tablet:text-[1rem] tablet:leading-7
              desktop:mt-[18px] desktop:text-start desktop:text-body"
            >
              {selectedPlanet.description}
            </p>
            <Divider className="tablet:mb-7 tablet:mt-12 desktop:mt-14" />
            <div className="flex flex-col gap-3 tablet:flex-row tablet:justify-center tablet:gap-36">
              <PlanetInfo
                label="avg. distance"
                info={selectedPlanet.distance}
              />
              <PlanetInfo
                label="est. travel time"
                info={selectedPlanet.travel}
              />
            </div>
          </Tabs.Content>
        </SlideAnimation>
      </Tabs.Root>
    </div>
  );
}
