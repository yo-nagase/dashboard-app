"use client"

import {
  Atom,
  BookOpen,
  Eclipse,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Star,
} from "lucide-react"

import { NavMain } from "@/components/navigation/nav-main"
import { NavProjects } from "@/components/navigation/nav-projects"
import { NavSecondary } from "@/components/navigation/nav-secondary"
import { NavUser } from "@/components/navigation/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Atom,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Eclipse,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Dashboard（開いたまま）",
      url: "#",
      icon: SquareTerminal,
      isActive: true, // 開いたままになる
      items: [
        {
          title: "Dashboard1",
          url: "/main/dashboard",
          icon: History,
          description: "View your recent prompts",
        },
        {
          title: "Dashboard2",
          url: "/main/dashboard2",
          icon: Star,
          description: "Browse your starred prompts",
        },
        {
          title: "Dashboard3",
          url: "/main/dashboard3",
          icon: Settings2,
          description: "Configure your playground",
        },
      ],
    },
    {
      title: "Master",
      url: "#",
      icon: BookOpen,
      isActive: true, // 開いたままになる
      items: [
        {
          title: "Master1",
          url: "/main/master/master1",
        },
        {
          title: "Master2",
          url: "#",
        },
        {
          title: "Master3",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Project1",
      url: "#",
      icon: Frame,
    },
    {
      name: "Project2",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Project3",
      url: "#",
      icon: Map,
    },
  ],


}

export function AppSidebar() {
  const { data: session } = useSession()

  return (
    <Sidebar className="mt-[50px] flex flex-col h-[calc(100vh-50px)] bg-inherit">
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent className="flex-grow overflow-y-auto">
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Help
          </SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: session?.user?.name ?? "",
          email: session?.user?.email ?? "",
          avatar: session?.user?.image ?? "",
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}
