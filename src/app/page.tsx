export default function Home() {
  return (
    <>
      <picture className="absolute left-0 top-0 -z-10 w-full">
        <source
          media="(max-width: 375px)"
          srcSet="/images/home/background-home-mobile.jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/images/home/background-home-tablet.jpg"
        />
        <img
          src="/images/home/background-home-desktop.jpg"
          alt="home-background-space"
        />
      </picture>
      <article className="flex flex-col items-center gap-4">
        <p className="font-barlow-condensed text-nav text-secondary">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h2 className="text-[80px] leading-[100px]">SPACE</h2>
        <p className="text-center font-barlow text-body text-secondary">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
    </>
  );
}
