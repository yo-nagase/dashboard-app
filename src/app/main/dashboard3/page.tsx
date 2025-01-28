import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Page() {

  const session = await getServerSession(authOptions)
  console.log("session🐳", session)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover a better way to manage your projects and collaborate with your team
          </p>
          {!session?.user ? (
            <div className="flex gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          ) : (
            <Link href="/main/dashboard">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Go to Dashboard
              </Button>
            </Link>
          )}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Collaboration</CardTitle>
              <CardDescription>
                Work together with your team in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                {/* Add feature illustration or icon here */}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Get insights into your project performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                {/* Add feature illustration or icon here */}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure & Reliable</CardTitle>
              <CardDescription>
                Enterprise-grade security for your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                {/* Add feature illustration or icon here */}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Section */}
        {session?.user && (
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="User profile"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {session.user.name}!</h2>
            <p className="text-gray-600 dark:text-gray-300">{session.user.email}</p>
          </div>
        )}
      </div>
    </div>
  )

}
