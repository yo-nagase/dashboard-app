"use client"

import { useSession } from "next-auth/react"

export function NavUserInfo() {
  const { data: session } = useSession()
  return (
    <>
      <span className="text-sm px-4">
        ユーザ名：{session?.user?.name}
      </span>
    </>
  )
}
