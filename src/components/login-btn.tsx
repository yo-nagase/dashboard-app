import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session.user?.name ?? session.user?.email}としてログイン中<br /><br />
        <Button variant="outline" onClick={() => signOut()}>
          サインアウトボタン
        </Button>
      </>
    )
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={() => signIn('github')}
      >
        <Github className="mr-2 h-4 w-4" />
        GitHubでログイン
      </Button>
      <br /><br />
      <Button
        variant="outline"
        onClick={() => signIn('github')}
      >
        <Github className="mr-2 h-4 w-4" />
        B2Cでログイン
      </Button>
    </>
  )
}