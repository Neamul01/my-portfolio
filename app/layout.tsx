import MainNavbar from "@/components/Navbars/MainNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Neamul Haque | Portfolio",
  description: "Neamul Haque's personal portfolio",
};
const popins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.variable}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
