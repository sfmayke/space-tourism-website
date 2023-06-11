interface Props {
  label: string;
  info: string;
}

export default function PlanetInfo({ label, info }: Props) {
  return (
    <section className="flex flex-col items-center gap-3 desktop:items-start">
      <h2 className="font-barlow-condensed text-sh2 uppercase text-secondary">
        {label}
      </h2>
      <h3 className="text-sh1 uppercase">{info}</h3>
    </section>
  );
}
