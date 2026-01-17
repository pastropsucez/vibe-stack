import { signOut } from "@convex-dev/auth/nextjs/server"
import { redirect } from "next/navigation"

export async function GET() {
  await signOut()
  redirect("/")
}
