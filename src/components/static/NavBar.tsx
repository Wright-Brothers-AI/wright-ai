"use client";
import React from "react";
//import { DashboardButton } from "./ui/authButtons/AuthButton";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigationMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "@/components/user-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image"; // Import the Image component from the appropriate library
import Link from "next/link"; // Import the Link component from the appropriate library

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<Sheet>
						<SheetTrigger asChild className="lg:hidden">
							<Button variant="ghost" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="pr-0 sm:max-w-xs">
							<MobileNav />
						</SheetContent>
					</Sheet>
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/logo.jpeg"
							alt="Wright Brothers AI Logo"
							width={40}
							height={40}
							className="rounded-md"
						/>
						<span className="hidden font-bold sm:inline-block">Wright Brothers AI</span>
					</Link>
				</div>

				<div className="hidden lg:flex">
					<NavigationMenu>
						<NavigationMenuList>
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
													<p className="text-sm leading-tight text-muted-foreground">
														Discover how our AI assistants can help with your aviation studies
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href="/#ai-features" title="Explore Legislation">
											Wilbur and Orville understand FAR and AIM regulations
										</ListItem>
										<ListItem href="/#wilbur" title="AI Wilbur">
											Expert in Code of Federal Regulations Title 14
										</ListItem>
										<ListItem href="/#orville" title="AI Orville">
											Expert in the Aeronautical Information Manual
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Technology</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
													href="/features"
												>
													<div className="mb-2 mt-4 text-lg font-medium">
														AI Enhanced Flight Education
													</div>
													<p className="text-sm leading-tight text-muted-foreground">
														Our advanced AI technologies help you learn faster
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href="/features#conversational" title="Conversational AI">
											Learn through natural conversation with accurate information
										</ListItem>
										<ListItem href="/features#experts" title="Multiple AI Experts">
											Interact with both Wilbur and Orville simultaneously
										</ListItem>
										<ListItem href="/features#advanced" title="Advanced Features">
											Use advanced search functionality for targeted learning
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
				</div>

				<div className="flex items-center gap-2">
					<ThemeToggle />
					<div className="hidden md:block">
						<UserMenu />
					</div>
					<Link href="/login" className="hidden md:inline-block">
						<Button variant="secondary" size="sm">Sign In</Button>
					</Link>
					<Link href="/signup" className="hidden sm:inline-block">
						<Button size="sm">Get Started</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default NavBar;

function MobileNav() {
	return (
		<div className="flex flex-col gap-6 px-2 py-4">
			<Link href="/" className="flex items-center gap-2">
				<Image
					src="/logo.jpeg"
					alt="Wright Brothers AI Logo"
					width={32}
					height={32}
					className="rounded-md"
				/>
				<span className="font-bold">Wright Brothers AI</span>
			</Link>
			<div className="flex flex-col space-y-3">
				<Link href="/#ai-features" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
					Features
				</Link>
				<Link href="/features" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
					Technology
				</Link>
				<Link href="/chat" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
					Chat
				</Link>
				<Link href="/pricing" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
					Pricing
				</Link>
				<div className="h-px bg-border"></div>
				<Link href="/login" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
					Sign In
				</Link>
				<Link href="/signup" className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
					Get Started
				</Link>
			</div>
		</div>
	);
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
