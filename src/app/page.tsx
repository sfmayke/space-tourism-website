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
      <h1>Hello World</h1>
    </>
  );
}
