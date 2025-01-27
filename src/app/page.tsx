"use client"

import LoginButton from "@/components/login-btn"
import { SessionInfo } from "@/components/session-info"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full space-y-8">
        <div className="flex justify-end">
          <LoginButton />
        </div>
        <SessionInfo />
      </div>
    </main>
  )
}