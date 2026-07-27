import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "RootProof Platform | Product Data Management for Rubber Exporters",
  description:
    "RootProof helps rubber exporters manage product data, supplier evidence, certificates and buyer-ready proof in one connected platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
