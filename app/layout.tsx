import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { DateTime } from "luxon";
import { Organization } from "schema-dts";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://seebox.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
const organization: Organization = {
  "@type": "Organization",
  name: "SeeBox",
  disambiguatingDescription:
    "A platform enhancing social network interactions and commerce.",
  url: "https://seebox.app",
  logo: "https://seebox.app/logo.jpg",
  foundingDate: "2025-01-01",
  founder: "SeeBox Team",
  description:
    "SeeBox.app revolutionizes social network experiences by integrating advanced tools for seamless commerce and interaction.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "contact@seebox.app",
      contactType: "Customer Support",
      availableLanguage: ["English", "Persian"],
    },
    {
      "@type": "ContactPoint",
      email: "info@seebox.app",
      contactType: "Business Inquiries",
      availableLanguage: ["English", "Persian"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "Iran",
  },
  sameAs: [
    "https://www.instagram.com/seebox.app",
    "https://github.com/Seebox-app",
  ],
  knowsAbout: [
    "Social Media Integration",
    "Retail Data Analysis",
    "E-commerce Tools",
    "Payment Solutions",
    "Tracking Systems",
  ],
  mainEntityOfPage: [
    {
      "@type": "WebPage",
      "@id": "https://seebox.app/privacy-policy",
      name: "Privacy Policy",
      description: "Learn more privacy policy of SeeBox.",
    },
    {
      "@type": "WebPage",
      "@id": "https://seebox.app/cookies",
      name: "Cookies Policy",
      description: "Learn more cookies policy of SeeBox.",
    },
  ],
  keywords: [
    "Social Network",
    "E-commerce",
    "Instagram Integration",
    "Retail Data",
    "Tracking Tools",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://seebox.app"
                title="Seebox.app homepage"
              >
                <p className="text-default-600">
                  &copy; {DateTime.now().year}&nbsp;
                  <span className="text-primary">SeeBox</span>. All rights
                  rights reserved.
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
