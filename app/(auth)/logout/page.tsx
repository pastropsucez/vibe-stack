"use client"

import { useAuthActions } from "@convex-dev/auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const { signOut } = useAuthActions()
  const router = useRouter()

  useEffect(() => {
    signOut().then(() => {
      router.push("/")
    })
  }, [signOut, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Signing out...</p>
    </div>
  )
}
