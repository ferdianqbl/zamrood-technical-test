import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-albert">{children}</body>
    </html>
  );
}
