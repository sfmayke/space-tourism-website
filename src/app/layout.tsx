import "./globals.css";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const inter = Bellefair({ subsets: ["latin"], weight: "400" });
const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow_condensed",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlow_condensed.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
