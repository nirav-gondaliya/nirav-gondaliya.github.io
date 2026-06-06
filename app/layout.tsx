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
    default: "Nirav Gondaliya — Forward Deployed Engineer · AI Solutions & Delivery",
    template: "%s · Nirav Gondaliya",
  },
  description:
    "Nirav Gondaliya — Forward Deployed Engineer (Rajkot, India · Remote). 7+ years embedding with customers to turn ambiguous business problems into shipped production systems. AI/LLM delivery — MCP servers, agent loops, multi-LLM routing, RAG — on TypeScript / Node.js / React / AWS. Served Burger King and Belgian Waffles among other QSR and enterprise customers across India, the US and the UK.",
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
    "Forward Deployed Engineer",
    "Forward Deployed Engineer India",
    "FDE",
    "Customer Engineer",
    "AI Solutions Engineer",
    "AI Delivery Engineer",
    "MCP Server developer",
    "Agent loops",
    "Multi-LLM routing",
    "RAG engineer",
    "Senior Full-Stack Engineer",
    "Next.js engineer",
    "TypeScript engineer",
    "Node.js engineer",
    "Remote Engineer India",
    "Founding Engineer",
    "Ratnam Solutions",
    "Burger King",
    "Belgian Waffles",
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
    title: "Nirav Gondaliya — Forward Deployed Engineer · AI Solutions & Delivery",
    description:
      "Official portfolio of Nirav Gondaliya. Forward Deployed Engineer embedding with customers to deliver AI/LLM systems — MCP servers, agent loops, RAG — end-to-end into production.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirav Gondaliya — Forward Deployed Engineer · AI Solutions & Delivery",
    description:
      "Nirav Gondaliya — 7+ years embedding with customers to ship AI/LLM systems into production. MCP servers, agent loops, RAG. Open to FDE / founding remote roles.",
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
  jobTitle: "Forward Deployed Engineer — AI Solutions & Delivery",
  description:
    "Forward Deployed Engineer with 7+ years embedding with customers to turn ambiguous business problems into shipped production systems. Specializes in AI/LLM delivery — MCP servers, agent loops, multi-LLM routing and RAG.",
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
    "Forward Deployed Engineering",
    "Customer Discovery & Scoping",
    "Stakeholder Management (C-suite ↔ Engineering)",
    "Production Deployment & Incident Response",
    "MCP Servers & Clients",
    "Agent Loops",
    "Multi-LLM Routing",
    "RAG",
    "Full-Stack Engineering",
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
