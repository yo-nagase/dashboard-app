import React from 'react'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "../components/theme-provider"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}