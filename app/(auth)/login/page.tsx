import { Metadata } from "next"

import LoginForm from "./LoginForm"

export const metadata: Metadata = {
  title: "Log In | Vibe Stack",
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold">Welcome Back</h1>
        <LoginForm />
      </div>
    </main>
  )
}
