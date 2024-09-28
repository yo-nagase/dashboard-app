'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface OrganizationData {
  name: string;
  description: string;
  website: string;
  employeeCount: number;
}

export function OrganizationFormComponent() {
  // const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const organizationData: OrganizationData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      website: formData.get('website') as string,
      employeeCount: Number(formData.get('employeeCount')),
    }

    try {
      // Simulating API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Here you would typically send the data to your API
      // For example:
      // const response = await fetch('/api/organizations', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(organizationData),
      // })
      // if (!response.ok) throw new Error('Failed to save organization')

      console.log(organizationData)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 [&_button]:text-red-500">

      <Button
        type="submit"
        className="hover:bg-green-200 bg-blue-200"
        disabled={isLoading}
      >
        テストボタン
      </Button>
      <div className="max-w-lg mx-auto p-8">
        <details className="close:bg-red-200 open:text-red-500 bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
          <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Why do they call it Ovaltine?
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p className="open:text-red-500">The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>

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