"use server"

import { signIn, signOut } from "next-auth/react"



export const githubLogin = async (callbackUrl?: string) => {
  await signIn("github", {
    callbackUrl: callbackUrl
  })
  //await signIn("github", { callbackUrl })

}

export const azureAdLogin = async (callbackUrl?: string) => {
  await signIn("azure-ad", {
    callbackUrl: callbackUrl
  })
}

export const azureAdB2cLogin = async (callbackUrl?: string) => {
  await signIn("azure-ad-b2c", {
    callbackUrl: callbackUrl
  })
}

export const logout = async () => {
  // Using the more direct path to ensure client-side navigation
  window.location.href = `/api/auth/signout?callbackUrl=/login`
}



