import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { Router } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nonakadai",
  description: "my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
