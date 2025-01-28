'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Master1Component() {
  // const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Simulating API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000))

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 [&_button]:text-red-500">

      <h1 className="text-2xl font-bold mb-6">Add Organization</h1>
      <p className="text-green-200 sm:text-red-500 max-[200px]:text-purple-500">xxxxxxppppx</p>
      <p className="text-muted-foreground mb-6">Enter the details of the organization you want to add to the database.</p>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Organization Name</Label>
          <Input id="name" name="name" placeholder="Enter organization name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" placeholder="Enter organization description" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" type="url" placeholder="https://example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="employeeCount">Number of Employees</Label>
          <Input id="employeeCount" name="employeeCount" type="number" min="1" placeholder="Enter number of employees" />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Organization"}
        </Button>
      </form>
    </div>
  )
}