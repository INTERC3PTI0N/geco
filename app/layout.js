import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/site/AppChrome";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Geco Trading Corporation — Aftermarket Engine Parts in Original Quality",
  description:
    "Geco Trading Corporation Pvt. Ltd. — one of India's largest engineering export houses since 1958. ISO 9001:2015 certified aftermarket engine parts exported to 60+ countries.",
  keywords: [
    "aftermarket engine parts",
    "engine valves",
    "cylinder liners",
    "crankshafts",
    "engine parts exporter India",
    "Geco Trading Corporation",
  ],
  openGraph: {
    title: "Geco Trading Corporation — Aftermarket Engine Parts",
    description:
      "Precision-crafted aftermarket engine parts in original quality. Exporting excellence since 1958.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
