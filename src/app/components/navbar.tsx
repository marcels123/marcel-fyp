"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

interface Component {
  title: string;
  href: string;
  description: string;
}

const components: Component[] = [
  {
    title: "Gaming",
    href: "/webpages/info/games",
    description:
      "Explore how AI is revolutionizing the game industry including Content Generation, Game mechanics, and AI-powered NPC Behaviour and Animation.",
  },
  {
    title: "Music",
    href: "/webpages/info/music",
    description:
      "Explore how AI is revolutionizing the Music industry including AI-Generated Music, and AI Mixing and Mastering.",
  },
  {
    title: "Film",
    href: "/webpages/info/fillm",
    description:
      "Explore how AI is revolutionizing the film industry, including deepfake detection and AI-powered video enhancements.",
  },
]

export function NavMenu() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">AI Learning Hub</span>
        </Link>

        {/* Main Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-600 hover:text-gray-900">Getting started</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-gray-900">
                          DigiMed AI
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Explore the world of AI through interactive learning, demos, and real-world applications.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Learn about artificial intelligence and its impact on digital media in various industries.
                  </ListItem>
                  <ListItem href="/webpages/about" title="About Us">
                    Learn about this project, its aim and objectives.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Resources">
                    Access learning materials, tutorials, and interactive demos.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-600 hover:text-gray-900">Components</NavigationMenuTrigger>
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
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/webpages/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/webpages/ai-playground" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  AI Playground
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent")}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/authentication/login" className="text-gray-600 hover:text-gray-900">
            Log In
          </Link>
          <Link 
            href="/authentication/register" 
            className="bg-[#635bff] text-white px-4 py-2 rounded-md hover:bg-[#635bff]/90 transition-colors"
          >
            Open Account
          </Link>
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
