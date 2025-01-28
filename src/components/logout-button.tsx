"use client"

import { Button } from "@/components/ui/button"
import { useLogout } from "@/hooks/use-logout"

export function LogoutButton() {
  return (
    <div>
      <Button
        onClick={useLogout()}
        className="w-full"
      >
        Logout
      </Button>
    </div>
  )
} 