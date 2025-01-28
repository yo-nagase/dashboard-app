import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log("session🐳", session)

  if (session?.user) {
    return (
      <>
        <div className="flex flex-col min-h-svh w-full items-center justify-center gap-4 p-6 md:p-10">
          <h1 className="text-3xl font-bold ">
            Demo App
          </h1>
          <Link href="/login">ログインページへ</Link>
        </div>
      </>
    )
  } else {
    return (
      <div className="flex flex-col min-h-svh w-full items-center justify-center gap-4 p-6 md:p-10">
        <Link href="/login">ログインページへ</Link>
        {/* <SsoLoginButtons /> */}
      </div>
    )
  }
}
