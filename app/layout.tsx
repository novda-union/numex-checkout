import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numex — Upgrade to Pro",
  description: "Unlock all Numex features with a Pro subscription.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1A1A2E] text-white antialiased">
        <header className="flex items-center justify-center py-8 px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6C5CE7] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L10 17.77L3.82 21.02L5 14.14L0 9.27L6.91 8.26L10 2Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight">Numex</span>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center px-4 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
