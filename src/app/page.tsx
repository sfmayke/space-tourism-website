import BackgroundImage from "@ui/background-image";
import ExploreButtom from "@/components/home/expore-buttom";
import backgroundImageSrc from "@public/images/home/background-home-desktop.jpg";
import PageAnimation from "./pageAnimation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 tablet:pt-0 desktop:flex-row desktop:p-40">
      <BackgroundImage
        srcDefault={backgroundImageSrc}
        srcTablet="/images/home/background-home-tablet.jpg"
        srcMobile="/images/home/background-home-mobile.jpg"
        alt="home-background-space"
      />
      <PageAnimation>
        <article className="flex flex-col items-center gap-4 tablet:mt-[6.625rem] tablet:max-w-md tablet:gap-6 desktop:items-start">
          <p className="font-barlow-condensed text-nav uppercase text-secondary tablet:text-xl desktop:text-sh1">
            so, you want to travel to
          </p>
          <h1 className="text-[80px] leading-[100px] tablet:text-h1 tablet:leading-[150px] desktop:text-h1">
            SPACE
          </h1>
          <p
            className="text-center font-barlow text-body text-secondary 
          tablet:text-base tablet:leading-6 
          desktop:text-left desktop:text-[1.125rem] desktop:leading-8"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <ExploreButtom />
      </PageAnimation>
    </div>
  );
}
