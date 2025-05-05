"use client";
// File: /app/home/page.tsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, CheckCircle, FileText, MessageSquare, Plane, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary/20">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<Badge className="inline-flex items-center border bg-primary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary-foreground">
									Flight Education Reimagined
								</Badge>
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Wright Brothers AI
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Your AI-powered flight instructors, helping student pilots master aviation regulations and procedures.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="/chat">
									<Button size="lg" className="gap-1.5">
										Start Learning <ArrowRight className="h-4 w-4" />
									</Button>
								</Link>
								<Link href="/features">
									<Button size="lg" variant="outline">
										Explore Features
									</Button>
								</Link>
							</div>
						</div>
						<div className="relative hidden lg:block">
							<div className="absolute inset-0 bg-gradient-to-r from-background to-background/0 z-10" />
							<Image
								src="/cloud-hero.jpg"
								alt="Airplane flying through clouds"
								width={600}
								height={400}
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="ai-features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Meet Your AI Flight Instructors
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Wright Brothers AI offers specialized AI assistants for different aspects of aviation education.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
						<Card className="flex flex-col h-full" id="wilbur">
							<CardHeader className="pb-0">
								<CardTitle className="flex items-center gap-2">
									<FileText className="h-5 w-5 text-primary" />
									Wilbur AI
								</CardTitle>
								<CardDescription>
									Federal Aviation Regulations Expert
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6 flex-1">
								<div className="flex items-start gap-4">
									<div className="relative w-24 h-24 rounded-lg overflow-hidden">
										<Image
											src="/wilbur.jpeg"
											alt="Wilbur AI"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Wilbur AI specializes in interpreting the Code of Federal Regulations (FAR), providing precise and reliable information to ensure you stay compliant with aviation laws.
										</p>
										<ul className="mt-4 grid gap-2">
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">FAR Title 14 expertise</span>
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">Regulatory compliance guidance</span>
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">Licensing requirements</span>
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Link href="/chat?assistant=wilbur">
									<Button variant="outline" className="w-full">Chat with Wilbur</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card className="flex flex-col h-full" id="orville">
							<CardHeader className="pb-0">
								<CardTitle className="flex items-center gap-2">
									<BookOpen className="h-5 w-5 text-primary" />
									Orville AI
								</CardTitle>
								<CardDescription>
									Aeronautical Information Manual Expert
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6 flex-1">
								<div className="flex items-start gap-4">
									<div className="relative w-24 h-24 rounded-lg overflow-hidden">
										<Image
											src="/orville.jpeg"
											alt="Orville AI"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Orville AI focuses on the Aeronautical Information Manual (AIM), offering in-depth guidance and insights to help you understand and follow aviation protocols effectively.
										</p>
										<ul className="mt-4 grid gap-2">
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">AIM procedure guidance</span>
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">Air traffic control protocols</span>
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle className="h-4 w-4 text-primary" />
												<span className="text-sm">Navigation best practices</span>
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Link href="/chat?assistant=orville">
									<Button variant="outline" className="w-full">Chat with Orville</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								How Wright Brothers AI Works
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our AI system is designed to make flight education accessible and effective.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 py-12">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<MessageSquare className="h-8 w-8 text-primary" />
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-bold">Ask Questions</h3>
								<p className="text-muted-foreground">
									Type your aviation questions and get instant, accurate answers from our specialized AI assistants.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<BookOpen className="h-8 w-8 text-primary" />
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-bold">Learn Regulations</h3>
								<p className="text-muted-foreground">
									Study FAR and AIM content with AI assistance that explains complex concepts in simple terms.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<Plane className="h-8 w-8 text-primary" />
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-bold">Master Aviation</h3>
								<p className="text-muted-foreground">
									Build confidence and knowledge through interactive learning that adapts to your needs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								What Student Pilots Say
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Hear from pilots who have improved their knowledge with Wright Brothers AI.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 py-12">
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col gap-4">
									<p className="text-sm text-muted-foreground italic">
										&quot;Wright Brothers AI helped me understand complex FAR regulations that I was struggling with. The ability to ask questions in natural language made all the difference.&quot;
									</p>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
											<Users className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="text-sm font-medium">Michael S.</p>
											<p className="text-xs text-muted-foreground">Private Pilot Student</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col gap-4">
									<p className="text-sm text-muted-foreground italic">
										&quot;Studying for my checkride was so much easier with Orville AI. I could quickly get clarification on AIM procedures without digging through the entire manual.&quot;
									</p>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
											<Users className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="text-sm font-medium">Jennifer L.</p>
											<p className="text-xs text-muted-foreground">Commercial Pilot</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col gap-4">
									<p className="text-sm text-muted-foreground italic">
										&quot;The ability to chat with both Wilbur and Orville at the same time gives me a comprehensive understanding of both regulations and procedures. Highly recommend!&quot;
									</p>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
											<Users className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="text-sm font-medium">David R.</p>
											<p className="text-xs text-muted-foreground">Flight Instructor</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Elevate Your Aviation Knowledge?
							</h2>
							<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join Wright Brothers AI today and transform how you learn aviation regulations and procedures.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link href="/signup">
								<Button size="lg" variant="secondary" className="gap-1.5">
									Get Started <ArrowRight className="h-4 w-4" />
								</Button>
							</Link>
							<Link href="/pricing">
								<Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
									View Pricing
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}


