import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mengzhao Jia | Multimodal AI Researcher",
  description:
    "Personal website of Mengzhao Jia, a Ph.D. student researching multimodal reasoning and vision-language models at the University of Notre Dame.",
  keywords: [
    "Mengzhao Jia",
    "multimodal reasoning",
    "vision-language models",
    "multimodal AI",
    "University of Notre Dame",
  ],
  authors: [{ name: "Mengzhao Jia" }],
  openGraph: {
    title: "Mengzhao Jia | Multimodal AI Researcher",
    description:
      "Research in multimodal reasoning, vision-language models, and trustworthy AI.",
    type: "website",
    url: "https://jill0001.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://gc.zgo.at/count.js"
            data-goatcounter="https://mengzhao-jia.goatcounter.com/count"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
