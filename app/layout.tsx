import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StepInWeb",
  description: "Affordable website platform for trades and small businesses with monthly billing, no setup costs, marketing tracking, customer analytics, and instant launch — cancel anytime",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}