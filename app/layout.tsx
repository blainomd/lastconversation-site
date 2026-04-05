import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "The Last Conversation | The talk families avoid. Biweekly essays.",
  description:
    "70% of Americans want to die at home. 70% don't. Because nobody had the conversation. Biweekly essays on death, dying, and the words we leave unsaid.",
  openGraph: {
    title: "The Last Conversation",
    description:
      "70% of Americans want to die at home. 70% don't. Because nobody had the conversation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
