import { redirect } from "next/navigation"
import LoginForm from "@/components/login-form"

export default function Home() {
  // If we're on the client, check if the user is already logged in
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")
    if (token) {
      redirect("/users")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">User Management App</h1>
        <LoginForm />
      </div>
    </main>
  )
}

