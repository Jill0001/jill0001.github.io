import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jill0001.github.io"),
  alternates: { canonical: "/" },
  verification: { google: "D_Pvu2lr-SQDnWe3dUpbjImC6_UuENcANHJo4trUPY4" },
  title: "Mengzhao Jia",
  icons: {
    icon: "/blank-icon.svg",
    shortcut: "/blank-icon.svg",
  },
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
    title: "Mengzhao Jia",
    siteName: "Mengzhao Jia",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mengzhao Jia",
              url: "https://jill0001.github.io/",
            }).replace(/</g, "\\u003c"),
          }}
        />
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
