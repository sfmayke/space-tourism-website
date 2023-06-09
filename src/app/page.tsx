import ExploreButtom from "@/components/home/expore-buttom";
import PageContainer from "@/components/ui/page-container";
import backgroundImageSrc from "@public/images/home/background-home-desktop.jpg";
import BackgroundImage from "@ui/background-image";

const backgroundImg = (
  <BackgroundImage
    srcDefault={backgroundImageSrc}
    srcTablet="/images/home/background-home-tablet.jpg"
    srcMobile="/images/home/background-home-mobile.jpg"
    alt="home-background-space"
  />
);

export default function Home() {
  return (
    <PageContainer
      backgroundImg={backgroundImg}
      motionClassName="flex flex-col items-center desktop:flex-row desktop:gap-96"
      className="flex flex-col items-center justify-between p-6 tablet:pt-0 desktop:flex-row desktop:px-40 desktop:py-32"
    >
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
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <ExploreButtom />
    </PageContainer>
  );
}
