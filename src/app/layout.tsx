import "./globals.css";
import { Quicksand } from "@next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollIntoViewClientComponent } from "@/hooks/scroll-into-view";
import AnalyticsWrapper from "@/components/analytics";

const font = Quicksand();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AnalyticsWrapper />
        <ScrollIntoViewClientComponent />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
