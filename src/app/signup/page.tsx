"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { signup } from './actions';

export default function Signup({
	searchParams,
}: {
	searchParams: { message: string; };
}) {
	const [isLoading, setIsLoading] = useState(false);

	async function handleSignup(formData: FormData) {
		setIsLoading(true);
		await signup(formData);
		setIsLoading(false);
	}

	return (
		<div className="container flex h-screen w-screen flex-col items-center justify-center">
			<Link
				href="/"
				className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center justify-center rounded-md border border-input bg-background p-2.5 hover:bg-accent hover:text-accent-foreground"
			>
				<ArrowLeft className="h-4 w-4" />
				<span className="sr-only">Go back</span>
			</Link>

			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Create an account
					</h1>
					<p className="text-sm text-muted-foreground">
						Sign up to start learning with Wright Brothers AI
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="text-xl">Sign Up</CardTitle>
						<CardDescription>
							Fill in your details to create a new account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleSignup} className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="firstName">First Name</Label>
									<Input
										id="firstName"
										name="firstName"
										placeholder="John"
										autoCapitalize="words"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										name="lastName"
										placeholder="Doe"
										autoCapitalize="words"
										required
									/>
								</div>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="you@example.com"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="••••••••"
									autoCapitalize="none"
									autoComplete="new-password"
									autoCorrect="off"
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="organizationId">Organization ID</Label>
								<Input
									id="organizationId"
									name="organizationId"
									placeholder="Enter your organization ID"
									required
								/>
								<p className="text-xs text-muted-foreground">
									Contact your administrator if you don&apos;t have an organization ID
								</p>
							</div>

							<Button type="submit" className="w-full mt-2" disabled={isLoading}>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Creating account...
									</>
								) : (
									"Create Account"
								)}
							</Button>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<div className="text-center text-sm text-muted-foreground">
							Already have an account?{" "}
							<Link href="/login" className="text-primary hover:underline">
								Sign in
							</Link>
						</div>

						{searchParams?.message && (
							<div className="mt-2 p-3 bg-destructive/10 text-destructive text-center text-sm rounded-md border border-destructive/20">
								{searchParams.message}
							</div>
						)}
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

