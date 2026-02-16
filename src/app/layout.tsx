import { TopNav } from "@/components/TopNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { EasterEggs } from "@/components/EasterEggs";
import { ProgressBar } from "@/components/ProgressBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Isaac Levine - Software Engineer",
  description:
    "Isaac Levine is a software engineer at CarGurus and Northeastern University alum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={twMerge(inter.className, "antialiased min-h-screen")}
      >
        <ThemeProvider>
          <TopNav />
          <div className="pt-[68px]">
            <div
              className="max-w-5xl mx-auto min-h-[calc(100vh-68px)] flex flex-col"
            >
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <EasterEggs />
        <ProgressBar />
      </body>
    </html>
  );
}
