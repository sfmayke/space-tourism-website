"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Divider from "../ui/divider";
import PlanetInfo from "./planet-info";

type Destination = {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
};

interface Props {
  destinations: Destination[];
  className?: string;
}

export default function PlanetNavegationTabs({
  destinations,
  className,
}: Props) {
  return (
    <Tabs.Root className={className} defaultValue="Moon">
      <Tabs.List
        aria-label="Choose your destination"
        className="flex justify-center gap-6"
      >
        {destinations.map(({ name }) => (
          <Tabs.Trigger
            className="relative font-barlow-condensed text-sh2 uppercase before:absolute
            before:-bottom-2 before:h-[3px] before:bg-white before:transition-transform data-[state=active]:before:w-full"
            value={name}
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {destinations.map(({ name, description, distance, travel }) => (
        <Tabs.Content className="TabsContent" value={name}>
          <h1 className="mt-7 flex justify-center text-h3 uppercase">{name}</h1>
          <p className="text-center font-barlow text-[15px] leading-6 text-secondary">
            {description}
          </p>
          <Divider />
          <div className="flex flex-col gap-8">
            <PlanetInfo label="avg. distance" info={distance} />
            <PlanetInfo label="est. travel time" info={travel} />
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
