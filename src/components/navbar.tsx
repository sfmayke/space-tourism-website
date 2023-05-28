import Logo from "@/components/icons/logo";
import MobileMenuSvgIcon from "@/components/icons/mobile-menu";
import NavLink from "./nav-link";

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
        <Logo className="h-10 w-10 tablet:h-12 tablet:w-12" />
        <ul className="hidden h-24 items-center bg-white/5 font-barlow-condensed text-nav uppercase backdrop-blur-2xl tablet:flex tablet:gap-9 tablet:px-12 tablet:py-10 desktop:gap-12 desktop:pl-32 desktop:pr-40">
          {navegation.map(({ href, label, number }) => (
            <NavLink href={href}>
              <span className="hidden font-bold desktop:flex">{number}</span>
              &nbsp;{label}
            </NavLink>
          ))}
        </ul>
        <MobileMenuSvgIcon className="tablet:hidden" />
      </div>
    </nav>
  );
}
