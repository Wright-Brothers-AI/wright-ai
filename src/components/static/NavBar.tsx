"use client";
import React from "react";
//import { DashboardButton } from "./ui/authButtons/AuthButton";
import Link from "next/link"; // Import the Link component from the appropriate library
import Image from "next/image"; // Import the Image component from the appropriate library
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigationMenu";
import { cn } from "@/lib/utils/cn";



const NavBar = () => {
  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-2 text-base bg-white border-b border-solid z-50`}>
      <Link href="/">
        <Image
          src={"/logo.jpeg"}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex justify-center pl-16 align-bottom">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Capabilities
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/#nav1" title="Explore Relevant Legislation">
					Wilbur and Oroville Understand the FAR and AIM.
				</ListItem>
                <ListItem href="/#wilbur" title="About AI Wilbur">
                  Expert in the Code of Federal Regulations Title 14
                </ListItem>
                <ListItem href="/#orville" title="About AI Orville">
                  Expert in the Aeronautical Information Manual
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Advanced AI Technology</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/features#intro"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        AI Enhanced Flight Education
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/features#nav1" title="Conversational AI">
                  Use conversational chat to receive accurate educational information.
                </ListItem>
                <ListItem href="/features#nav2" title="Multiple AI Experts">
                  Interact simultaneously with both Wilbur and Oroville.
                </ListItem>
                <ListItem href="/features#nav3" title="Advanced Usage">
                  Use advanced functionality to further refine your search scope.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/chat" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Chat
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>
      <div className="whitespace-nowrap">
		<span>Button Here</span>
        {/* <DashboardButton /> */}
      </div>
    </header>
  );
};

export default NavBar;

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-primary focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
