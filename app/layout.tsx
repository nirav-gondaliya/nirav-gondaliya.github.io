import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const SITE_URL = "https://niravgondaliya.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    template: "%s · Nirav Gondaliya",
  },
  description:
    "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer (Rajkot, India · Remote). 7+ years shipping production systems across fintech, healthtech and enterprise SaaS. I build the unglamorous infrastructure that makes AI products actually work — MCP servers, local LLM deployment, agentic pipelines, resilient data systems.",
  keywords: [
    "Nirav Gondaliya",
    "niravgondaliya",
    "niravgondaliya.dev",
    "Nirav Gondaliya portfolio",
    "Nirav Gondaliya engineer",
    "Nirav Gondaliya developer",
    "Nirav Gondaliya GitHub",
    "Nirav Gondaliya resume",
    "Nirav Gondaliya CV",
    "Nirav Gondaliya Rajkot",
    "Nirav Gondaliya India",
    "Nirav",
    "Gondaliya",
    "nirav-gondaliya",
    "Senior Full-Stack Engineer",
    "Full-Stack Developer India",
    "AI Infrastructure Engineer",
    "MCP Server developer",
    "Next.js engineer",
    "TypeScript engineer",
    "Node.js engineer",
    "Agentic Pipelines",
    "Local LLM",
    "Remote Engineer India",
    "Founding Engineer",
    "Ratnam Solutions",
    "Shivay Infotech",
  ],
  authors: [{ name: "Nirav Gondaliya", url: "https://github.com/nirav-gondaliya" }],
  creator: "Nirav Gondaliya",
  publisher: "Nirav Gondaliya",
  applicationName: "Nirav Gondaliya — Portfolio",
  category: "Software Engineering",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Nirav Gondaliya",
    title: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    description:
      "Official portfolio of Nirav Gondaliya. Senior Full-Stack & AI Infrastructure Engineer building MCP servers, local LLM deployment, agentic pipelines and resilient data systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    description:
      "Nirav Gondaliya — 7+ years building production systems. AI infra, MCP servers, agentic pipelines. Open to senior / founding remote roles.",
    creator: "@niravzxv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nirav Gondaliya",
  alternateName: ["Nirav", "nirav-gondaliya", "niravgondaliya", "Nirav G."],
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  jobTitle: "Senior Full-Stack & AI Infrastructure Engineer",
  description:
    "Senior Full-Stack & AI Infrastructure Engineer with 7+ years shipping production systems across fintech, healthtech and enterprise SaaS.",
  email: "mailto:nirav.gondaliya@icloud.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Ratnam Solutions",
  },
  knowsAbout: [
    "Full-Stack Engineering",
    "AI Infrastructure",
    "MCP Servers",
    "Local LLM Deployment",
    "Agentic Pipelines",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "AWS",
  ],
  sameAs: [
    "https://github.com/nirav-gondaliya",
    "https://www.linkedin.com/in/niravzxv",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nirav Gondaliya",
  alternateName: "Nirav Gondaliya — Portfolio",
  url: SITE_URL,
  author: { "@type": "Person", name: "Nirav Gondaliya" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEEFE9" },
    { media: "(prefers-color-scheme: dark)", color: "#15140F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Avoid theme flash — set class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (t === null && false)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-surface text-fg font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
