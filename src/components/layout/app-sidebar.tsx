import { Home, BookOpen, Brain, Film, Music, Gamepad2, MessageSquare, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

//Import the sidebar from the ui folder

// Menu items
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Learn",
    url: "/dashboard/learn",
    icon: BookOpen,
  },
  {
    title: "AI Playground",
    url: "/dashboard/ai-playground",
    icon: Brain,
  },
  {
    title: "Contact",
    url: "/dashboard/contact",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-background/80 backdrop-blur-sm h-screen">
      <SidebarContent className="h-full py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 text-[15px] text-muted-foreground hover:text-foreground px-2 py-1.5">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
} 