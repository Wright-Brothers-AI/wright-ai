"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { login, loginDemo } from './actions';

export default function Login({
	searchParams,
}: {
	searchParams: { message: string; next?: string; };
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [isDemoLoading, setIsDemoLoading] = useState(false);

	async function handleLogin(formData: FormData) {
		setIsLoading(true);
		await login(formData);
		setIsLoading(false);
	}

	async function handleDemoLogin() {
		setIsDemoLoading(true);
		await loginDemo();
		setIsDemoLoading(false);
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

			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Welcome back
					</h1>
					<p className="text-sm text-muted-foreground">
						Enter your credentials to sign in to your account
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="text-xl">Sign In</CardTitle>
						<CardDescription>
							Access your Wright Brothers AI account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleLogin} className="grid gap-4">
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
								<div className="flex items-center justify-between">
									<Label htmlFor="password">Password</Label>
									<Link href="/forgot-password" className="text-xs text-primary hover:underline">
										Forgot password?
									</Link>
								</div>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="••••••••"
									autoCapitalize="none"
									autoComplete="current-password"
									autoCorrect="off"
									required
								/>
							</div>
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Signing In...
									</>
								) : (
									"Sign In"
								)}
							</Button>
						</form>

						<div className="relative my-4">
							<div className="absolute inset-0 flex items-center">
								<Separator />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-card px-2 text-muted-foreground">Or</span>
							</div>
						</div>

						<Button
							variant="outline"
							className="w-full"
							onClick={handleDemoLogin}
							disabled={isDemoLoading}
						>
							{isDemoLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Loading Demo...
								</>
							) : (
								"Try Demo"
							)}
						</Button>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<div className="text-center text-sm text-muted-foreground">
							Don't have an account?{" "}
							<Link href="/signup" className="text-primary hover:underline">
								Sign up
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

