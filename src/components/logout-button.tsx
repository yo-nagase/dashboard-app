"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

interface LogoutButtonProps {
  className?: string
}

export function LogoutButton({ className }: LogoutButtonProps) {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" })
  }

  return (
    <Button
      onClick={handleLogout}
      className={className}
    >
      Logout
    </Button>
  )
} 