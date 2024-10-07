"use client"

import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { MenuBar } from "@/components/menu-bar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <MenuBar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
      <SpeedInsights />
      <Analytics />
      <ToastProvider />
    </ThemeProvider>
  );
}