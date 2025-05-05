"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
	const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

	const plans = [
		{
			name: "Free",
			description: "Basic access for individual student pilots",
			price: {
				monthly: "$0",
				yearly: "$0",
			},
			features: [
				"Access to basic FAR/AIM questions",
				"5 conversations per day",
				"Chat history for 7 days",
				"Standard response time"
			],
			cta: "Get Started",
			link: "/signup?plan=free",
			popular: false
		},
		{
			name: "Pro",
			description: "Enhanced learning for serious student pilots",
			price: {
				monthly: "$19",
				yearly: "$190",
			},
			features: [
				"Access to all FAR/AIM content",
				"Unlimited conversations",
				"Chat history for 1 year",
				"Faster response time",
				"Save study materials",
				"Practice test questions"
			],
			cta: "Upgrade Now",
			link: "/signup?plan=pro",
			popular: true
		},
		{
			name: "Flight School",
			description: "For flight schools and training organizations",
			price: {
				monthly: "$49",
				yearly: "$490",
			},
			features: [
				"Everything in Pro",
				"Multiple user accounts",
				"Admin dashboard",
				"Student progress tracking",
				"Custom curriculum integration",
				"Priority support",
				"API access"
			],
			cta: "Contact Sales",
			link: "/contact?inquiry=flight-school",
			popular: false
		}
	];

	return (
		<div className="container py-12 md:py-24 lg:py-32">
			<div className="mx-auto flex flex-col items-center justify-center gap-4 md:gap-8 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						Choose the plan that's right for your aviation learning journey.
					</p>
				</div>

				<Tabs defaultValue="monthly" className="w-full max-w-[400px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger
							value="monthly"
							onClick={() => setBillingPeriod("monthly")}
						>
							Monthly
						</TabsTrigger>
						<TabsTrigger
							value="yearly"
							onClick={() => setBillingPeriod("yearly")}
						>
							Yearly <Badge variant="secondary" className="ml-2 bg-primary/10">Save 20%</Badge>
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
				{plans.map((plan) => (
					<Card
						key={plan.name}
						className={`flex flex-col ${plan.popular ? 'border-primary shadow-md relative' : ''}`}
					>
						{plan.popular && (
							<Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
								Popular
							</Badge>
						)}
						<CardHeader>
							<CardTitle className="text-2xl">{plan.name}</CardTitle>
							<CardDescription>{plan.description}</CardDescription>
						</CardHeader>
						<CardContent className="flex-1">
							<div className="mb-6">
								<div className="flex items-end">
									<span className="text-4xl font-bold">{plan.price[billingPeriod]}</span>
									{plan.name !== "Free" && <span className="text-muted-foreground ml-2">{billingPeriod === "monthly" ? "/month" : "/year"}</span>}
								</div>
								{billingPeriod === "yearly" && plan.name !== "Free" && (
									<p className="text-sm text-muted-foreground mt-1">
										Billed annually (save 20%)
									</p>
								)}
							</div>
							<ul className="space-y-3">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2">
										<CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Link href={plan.link} className="w-full">
								<Button
									className={`w-full ${plan.popular ? '' : 'bg-primary/90 hover:bg-primary'}`}
									variant={plan.popular ? "default" : "outline"}
								>
									{plan.cta}
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className="mx-auto max-w-3xl text-center mt-16 md:mt-24">
				<h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
				<div className="grid gap-4 md:grid-cols-2 text-left">
					<div className="space-y-2">
						<h3 className="font-medium">Can I change plans later?</h3>
						<p className="text-sm text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time.</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-medium">Is there a free trial?</h3>
						<p className="text-sm text-muted-foreground">All paid plans come with a 7-day free trial.</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-medium">How do I cancel my subscription?</h3>
						<p className="text-sm text-muted-foreground">You can cancel anytime from your account settings.</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-medium">Do you offer educational discounts?</h3>
						<p className="text-sm text-muted-foreground">Yes, we offer discounts for flight schools and educational institutions.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-2xl text-center mt-16 md:mt-24 border rounded-lg p-8 bg-muted/50">
				<h2 className="text-2xl font-bold mb-2">Need a Custom Solution?</h2>
				<p className="text-muted-foreground mb-6">
					Contact our team for specialized packages for flight schools, airlines, or educational institutions.
				</p>
				<Link href="/contact">
					<Button variant="default" size="lg">
						Contact Us
					</Button>
				</Link>
			</div>
		</div>
	);
}