import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bricolage_Grotesque,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MotionProvider } from "@/components/ui/MotionProvider";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});
const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://hussainsiddique.dev";
const TITLE = "Hussain Siddique — Full-Stack & DevOps Engineer";
const DESCRIPTION =
  "Full-stack & DevOps engineer — building, shipping, and running production software end to end. React · Next.js · Node · Laravel · Python · AWS · Docker · Terraform · AI automation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Hussain Siddique",
  },
  description: DESCRIPTION,
  keywords: [
    "Hussain Siddique",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Next.js",
    "React",
    "Node.js",
    "Laravel",
    "AWS",
    "Docker",
    "Terraform",
    "AI Automation",
    "SaaS Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Hussain Siddique", url: SITE_URL }],
  creator: "Hussain Siddique",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hussain Siddique",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Hussain Siddique — Full-Stack & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg flex flex-col">
        <MotionProvider>
          <ScrollProgress />
          {children}
          <div className="grain" aria-hidden />
        </MotionProvider>
      </body>
    </html>
  );
}
