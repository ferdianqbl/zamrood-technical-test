import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import ReactQueryProvider from "@/lib/providers/react-query-providers";

export const metadata: Metadata = {
  title: "Zamrood | Premium Travel Experiences",
  description:
    "Zamrood is a travel company that offers premium travel experiences.",
  icons: {
    icon: "/assets/icons/ic-logo-without-title.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-albert">
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
