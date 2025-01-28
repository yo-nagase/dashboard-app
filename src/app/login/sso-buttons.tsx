
import { Button } from '@/components/ui/button';
import {  ContactRound,Github,Laptop } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SsoButtons = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/main/dashboard"

  const handleSignInGithub = async () => {
    await signIn("github", { callbackUrl })
  }
  const handleSignInAzure = async () => {
    await signIn("azure-ad", { callbackUrl })
  }
  const handleSignInEntraAd = async () => {
    await signIn("microsoft-entra-id", { callbackUrl })
  }
  const handleSignInAzureB2C = async () => {
    await signIn("azure-ad-b2c", { callbackUrl })
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-sm text-muted-foreground">Login with your account as choose one of the following providers</p>
      </div>

      <Button
        onClick={() => handleSignInGithub()}
        className="w-full flex items-center justify-center gap-2 mb-1"
      >
        <Github className="h-5 w-5" />
        Login with Github
      </Button>
      <Button
        onClick={() => handleSignInAzure()}
        className="w-full flex items-center justify-center gap-2 mb-1"
      >
        <Laptop className="h-5 w-5" />
        Login with Azure AD
      </Button>

      <Button
        onClick={() => handleSignInAzureB2C()}
        className="w-full flex items-center justify-center gap-2"
      >
        <ContactRound className="h-5 w-5" />
        Login with Azure AD B2C
      </Button>
    </div>
  )
};

export default SsoButtons;

