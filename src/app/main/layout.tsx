import type { Metadata } from "next";
import "../globals.css";


import { SidebarLayout } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cookies } from "next/headers";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link, ChevronDown } from "lucide-react";
import React from "react";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 bg-background border-b">
        <div className="flex items-center space-x-2">

          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M12 8v-2" /><path d="M12 18v-2" /><path d="M18.7 8.7l-1.4-1.4" /><path d="M6.7 6.7l-1.4-1.4" /><path d="M18.7 15.3l-1.4 1.4" /><path d="M6.7 17.3l-1.4 1.4" /></svg>
            <span className="font-bold text-xl tracking-tight font-logo">Demo App</span>
          </span>
          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">Products <ChevronDown className="ml-1 h-3 w-3" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Product 1</DropdownMenuItem>
                <DropdownMenuItem>Product 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">Solutions <ChevronDown className="ml-1 h-3 w-3" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Solution 1</DropdownMenuItem>
                <DropdownMenuItem>Solution 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm">Resources</Button>
            <Button variant="ghost" size="sm">Enterprise</Button>
            <Button variant="ghost" size="sm">Docs</Button>
            <Button variant="ghost" size="sm">Pricing</Button>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Contact</Button>
          <Button variant="secondary" size="sm">Sign Up</Button>
        </div>
      </header>

      <SidebarLayout
        defaultOpen={cookies().get("sidebar:state")?.value === "true"}
      >
        <AppSidebar />
        {children}

      </SidebarLayout>

    </>
  );
}
