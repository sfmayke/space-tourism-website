"use client";

import crewData from "@/app/crew/crew-data.json";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { useState } from "react";
import Divider from "../ui/divider";

type Member = {
  name: string;
  image: string;
  role: string;
  bio: string;
};

export default function CrewSlider() {
  const [member, setMember] = useState<Member>(crewData[0]);

  return (
    <div className="grid-col grid justify-items-center">
      <div className="relative m-auto mt-8 h-[222px] w-[170px]">
        <Image priority src={member.image} fill alt="crew-member-image" />
      </div>
      <Divider className="my-0" />
      <Tabs.Root
        onValueChange={(name) =>
          setMember(
            crewData.find((crewMember) => crewMember.name === name) as Member
          )
        }
        className="mt-8 flex flex-col items-center"
        defaultValue={member.name}
      >
        <Tabs.List className="flex gap-4" aria-label="Manage your account">
          {crewData.map((crewMember) => (
            <Tabs.Trigger
              key={crewMember.role}
              className="rounded-full bg-white/50 before:block before:h-3 before:w-3 data-[state=active]:bg-white"
              value={crewMember.name}
            />
          ))}
        </Tabs.List>
        <Tabs.Content
          className="mt-8 flex flex-col items-center"
          forceMount
          key={member.bio}
          value={member.name}
        >
          <h2 className="text-nav uppercase text-white/50">{member.role}</h2>
          <h3 className="mt-2 text-[1.5rem] uppercase leading-7">
            {member.name}
          </h3>
          <p className="mt-4 text-center font-barlow text-[0.938rem] leading-6 text-secondary">
            {member.bio}
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
