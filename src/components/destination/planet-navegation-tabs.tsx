"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "class-variance-authority";

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
    <Tabs.Root className={cx(className)} defaultValue="Moon">
      <Tabs.List
        aria-label="Choose your destination"
        className="flex justify-center gap-6"
      >
        {destinations.map(({ name }) => (
          <Tabs.Trigger
            className="relative font-barlow-condensed text-sh2 uppercase
            before:absolute before:-bottom-2 before:h-[3px] before:w-full before:scale-100 before:bg-white before:transition-transform"
            value={name}
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {destinations.map(({ name, description }) => (
        <Tabs.Content className="TabsContent" value={name}>
          <div className="mt-7 flex justify-center text-h3 uppercase">
            {name}
          </div>
          <p className="text-center font-barlow text-[15px] leading-6 text-secondary">
            {description}
          </p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
