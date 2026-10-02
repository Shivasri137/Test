import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "AI Chat", description: "A modern AI chatbot" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }