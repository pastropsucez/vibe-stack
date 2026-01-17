import { Metadata } from "next"

import SignUpForm from "./SignUpForm"

export const metadata: Metadata = {
  title: "Sign Up | Vibe Stack",
}

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold">Create Account</h1>
        <SignUpForm />
      </div>
    </main>
  )
}
