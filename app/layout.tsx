import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Free Termite Inspection in Riverside CA | Book Online Today",
    template: "%s | Riverside Termite Inspection",
  },
  description:
    "Get a 100% free termite inspection in Riverside, CA. Licensed inspectors, no obligation, same-week availability. Book your spot online in 60 seconds.",
  openGraph: {
    title: "Free Termite Inspection in Riverside CA | Book Online Today",
    description:
      "Get a 100% free termite inspection in Riverside, CA. Licensed inspectors, no obligation, same-week availability. Book your spot online in 60 seconds.",
    type: "website",
    locale: "en_US",
    siteName: "Riverside Termite Inspection",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Analytics placeholder — replace GA_MEASUREMENT_ID with your actual ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');` }} /> */}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
