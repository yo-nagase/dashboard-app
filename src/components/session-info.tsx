'use client'

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function SessionInfo() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>セッション情報</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">ユーザーID</div>
            <div>{session.user?.id}</div>
            <div className="font-semibold">名前</div>
            <div>{session.user?.name}</div>
            <div className="font-semibold">メールアドレス</div>
            <div>{session.user?.email}</div>
            {session.user?.image && (
              <>
                <div className="font-semibold">プロフィール画像</div>
                <div>
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <div className="font-semibold">Raw Session Data:</div>
            <pre className="mt-2 rounded bg-slate-950 p-4 text-sm text-slate-50">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 