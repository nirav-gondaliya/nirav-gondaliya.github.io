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

const SITE_URL = "https://niravzxv.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    template: "%s · Nirav Gondaliya",
  },
  description:
    "7+ years shipping production systems across fintech, healthtech & enterprise SaaS. I build the unglamorous infrastructure that makes AI products actually work — MCP servers, local LLM deployment, agentic pipelines, resilient data systems.",
  keywords: [
    "Nirav Gondaliya",
    "Senior Full-Stack Engineer",
    "AI Infrastructure",
    "MCP Server",
    "Next.js",
    "TypeScript",
    "Agentic Pipelines",
    "Remote Engineer",
    "Founding Engineer",
  ],
  authors: [{ name: "Nirav Gondaliya", url: "https://github.com/niravzxv" }],
  creator: "Nirav Gondaliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Nirav Gondaliya",
    title: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    description:
      "I build the unglamorous infrastructure that makes AI products actually work — MCP servers, local LLM deployment, agentic pipelines, resilient data systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirav Gondaliya — Senior Full-Stack & AI Infrastructure Engineer",
    description:
      "7+ years building production systems. AI infra, MCP servers, agentic pipelines. Open to senior / founding remote roles.",
    creator: "@niravzxv",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
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
      </head>
      <body className="bg-surface text-fg font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
