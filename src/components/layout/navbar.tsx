"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { useAuth } from "@/lib/context/auth-context"
import { useRouter } from "next/navigation"

interface Component {
  title: string;
  href: string;
  description: string;
}

const components: Component[] = [
  {
    title: "Gaming",
    href: "/dashboard/learn/games",
    description:
      "Explore how AI is revolutionizing the game industry including Content Generation, Game mechanics, and AI-powered NPC Behaviour and Animation.",
  },
  {
    title: "Music",
    href: "/dashboard/learn/music",
    description:
      "Explore how AI is revolutionizing the Music industry including AI-Generated Music, and AI Mixing and Mastering.",
  },
  {
    title: "Film",
    href: "/dashboard/learn/film",
    description:
      "Explore how AI is revolutionizing the film industry, including deepfake detection and AI-powered video enhancements.",
  },
]

export function NavMenu() {
  const { isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Failed to sign out:", error)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-gray-900">DigiMed AI</span>
        </Link>

        {/* Main Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent text-gray-600 hover:text-gray-900">Getting started</NavigationMenuTrigger>
              <NavigationMenuContent className="backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-black">
                          DigiMed AI
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Explore the world of AI through interactive learning, demos, and real-world applications.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/dashboard/intro" title="Introduction">
                    Learn about artificial intelligence.
                  </ListItem>
                  <ListItem href="/dashboard/about" title="About Us">
                    Learn about this project, its aim and objectives.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-600 hover:text-gray-900">Learn</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard/ai-playground" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  AI Playground
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Actions */}
        <div className="flex items-center space-x-4">
          {isLoading ? null : isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                href="/authentication/login"
                className="px-5 py-2 rounded-full text-gray-800 bg-transparent hover:bg-[#F6E3BA] transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/authentication/register"
                className="px-5 py-2 rounded-full bg-[#635bff] text-white hover:bg-[#635bff]/90 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50/50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
