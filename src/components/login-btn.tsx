import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { Github } from "lucide-react"
import { RiMicrosoftFill } from "react-icons/ri"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">
          {session.user?.name ?? session.user?.email}としてログイン中
        </div>
        <Button variant="outline" onClick={() => signOut()}>
          サインアウト
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        onClick={() => signIn('github')}
      >
        <Github className="mr-2 h-4 w-4" />
        GitHubでログイン
      </Button>
      <Button
        variant="outline"
        onClick={() => signIn('azure-ad-b2c')}
      >
        <RiMicrosoftFill className="mr-2 h-4 w-4" />
        Azure B2Cでログイン
      </Button>
    </div>
  )
}