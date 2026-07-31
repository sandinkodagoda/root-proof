import "./globals.css";

import { DM_Sans, Space_Grotesk } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "RootProof Platform | Product Data Management for Rubber Exporters",
  description:
    "RootProof helps rubber exporters manage product data, supplier evidence, certificates and buyer-ready proof in one connected platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
