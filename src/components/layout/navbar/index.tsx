import Logo from "@/components/icons/LogoSvgIcon";
import MobileMenuSvgIcon from "@/components/icons/MobileMenuSvgIcon";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  number: string;
};

const navegation: NavItem[] = [
  {
    href: "/",
    label: "home",
    number: "00",
  },
  {
    href: "/",
    label: "destination",
    number: "01",
  },
  {
    href: "/",
    label: "crew",
    number: "02",
  },
  {
    href: "/",
    label: "technology",
    number: "03",
  },
];

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between p-6 tablet:p-0 tablet:pl-10 desktop:pl-14 desktop:pt-10">
        <Logo />
        <ul className="hidden h-24 items-center bg-white/5 font-barlow-condensed text-nav uppercase backdrop-blur-2xl tablet:flex tablet:gap-9 tablet:px-12 tablet:py-10 desktop:gap-12 desktop:pl-32 desktop:pr-40">
          {navegation.map(({ href, label, number }) => (
            <Link href={href}>
              <span className="font-bold tablet:hidden">{number}</span> {label}
            </Link>
          ))}
        </ul>
        <MobileMenuSvgIcon className="tablet:hidden" />
      </div>
    </nav>
  );
}
