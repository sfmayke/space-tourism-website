"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Divider from "@ui/divider";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PlanetInfo from "./planet-info";

type Planet = {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
};

type PlanetObj = {
  [k: string]: Planet;
};

interface Props {
  destinations: PlanetObj;
  className?: string;
}

export default function PlanetNavegationTabs({
  className,
  destinations,
}: Props) {
  const [selectedPlanet, setSelectedPlanet] = useState(
    destinations[Object.keys(destinations)[0]]
  );

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="relative mx-auto mt-8 h-44 w-44 tablet:mt-16 tablet:h-[300px] tablet:w-[300px] desktop:h-96 desktop:w-96"
          key={selectedPlanet.name}
          initial={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          exit={{ left: -100, opacity: 0 }}
        >
          <Image
            priority
            src={selectedPlanet.image}
            sizes="(max-width: 425px) 25vw, (max-width: 768px) 30vw, 100vw"
            alt="moon-planet"
            fill
          />
        </motion.div>
      </AnimatePresence>
      <Tabs.Root
        onValueChange={(planet) => setSelectedPlanet(destinations[planet])}
        className={className}
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
            before:-bottom-2 before:h-[3px] before:bg-white before:transition-transform data-[state=active]:before:w-full"
              value={name}
            >
              {name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <AnimatePresence mode="wait">
          <motion.div
            className="relative"
            key={selectedPlanet.distance + selectedPlanet.travel}
            initial={{ left: 100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            exit={{ left: -100, opacity: 0 }}
          >
            <Tabs.Content
              forceMount
              value={selectedPlanet.name}
              key={selectedPlanet.travel}
            >
              <h1 className="mt-7 flex justify-center text-h3 uppercase tablet:mt-9">
                {selectedPlanet.name}
              </h1>
              <p className="text-center font-barlow text-[15px] leading-6 text-secondary tablet:mt-2">
                {selectedPlanet.description}
              </p>
              <Divider />
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
          </motion.div>
        </AnimatePresence>
      </Tabs.Root>
    </>
  );
}
