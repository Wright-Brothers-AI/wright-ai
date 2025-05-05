"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	AlertCircle,
	BarChart3,
	BookOpen,
	CheckCircle2,
	Clock,
	CloudLightning,
	FileText,
	MessageSquare,
	Plane,
	Search,
	Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section id="intro" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<Badge variant="outline" className="w-fit">
									Advanced Technology
								</Badge>
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									AI-Powered Flight Education
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Discover how Wright Brothers AI revolutionizes aviation education with cutting-edge artificial intelligence.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="/signup">
									<Button size="lg">
										Get Started
									</Button>
								</Link>
								<Link href="#ai-assistants">
									<Button size="lg" variant="outline">
										Explore Features
									</Button>
								</Link>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="relative h-[350px] w-full overflow-hidden rounded-xl">
								<Image
									src="/cloud-hero.jpg"
									alt="Aviation Technology"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* AI Assistants Section */}
			<section id="ai-assistants" className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Meet Your AI Flight Instructors
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our specialized AI assistants provide expert guidance on different aspects of aviation regulations and procedures.
							</p>
						</div>
					</div>

					<Tabs defaultValue="wilbur" className="w-full max-w-4xl mx-auto mt-12">
						<div className="flex justify-center mb-8">
							<TabsList className="grid grid-cols-2 w-[400px]">
								<TabsTrigger value="wilbur" className="data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground">Wilbur AI</TabsTrigger>
								<TabsTrigger value="orville" className="data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground">Orville AI</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent value="wilbur" className="space-y-4">
							<div className="grid md:grid-cols-[1fr_300px] gap-6 items-center">
								<div>
									<div className="flex items-center gap-2 mb-4">
										<FileText className="h-6 w-6 text-primary" />
										<h3 className="text-2xl font-bold">Wilbur AI - FAR Expert</h3>
									</div>
									<p className="text-muted-foreground mb-6">
										Wilbur AI specializes in interpreting the Code of Federal Regulations (FAR), providing precise and reliable information to ensure you stay compliant with aviation laws.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Complete FAR Coverage</span>
												<p className="text-sm text-muted-foreground">Access all Federal Aviation Regulations with detailed interpretations.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Regulatory Compliance</span>
												<p className="text-sm text-muted-foreground">Get clear explanations of complex regulations and compliance requirements.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Licensing Requirements</span>
												<p className="text-sm text-muted-foreground">Understand pilot certification criteria and maintenance requirements.</p>
											</div>
										</li>
									</ul>
								</div>
								<div className="relative h-[300px] rounded-xl overflow-hidden">
									<Image
										src="/wilbur.jpeg"
										alt="Wilbur AI Assistant"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="orville" className="space-y-4">
							<div className="grid md:grid-cols-[1fr_300px] gap-6 items-center">
								<div>
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="h-6 w-6 text-primary" />
										<h3 className="text-2xl font-bold">Orville AI - AIM Expert</h3>
									</div>
									<p className="text-muted-foreground mb-6">
										Orville AI focuses on the Aeronautical Information Manual (AIM), offering in-depth guidance and insights to help you understand and follow aviation protocols effectively.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Comprehensive AIM Coverage</span>
												<p className="text-sm text-muted-foreground">Learn all aspects of the Aeronautical Information Manual with clear explanations.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Air Traffic Control</span>
												<p className="text-sm text-muted-foreground">Master ATC communications and protocols for safer flying.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
											<div>
												<span className="font-medium">Navigation Procedures</span>
												<p className="text-sm text-muted-foreground">Understand airport operations, navigation systems, and flight procedures.</p>
											</div>
										</li>
									</ul>
								</div>
								<div className="relative h-[300px] rounded-xl overflow-hidden">
									<Image
										src="/orville.jpeg"
										alt="Orville AI Assistant"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Key Features */}
			<section id="conversational" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Advanced Learning Features
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Wright Brothers AI leverages cutting-edge technology to enhance your aviation education experience.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						<Card className="flex flex-col h-full">
							<CardHeader>
								<MessageSquare className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Conversational Learning</CardTitle>
								<CardDescription>
									Natural language interaction for intuitive learning
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Ask questions in plain English and receive clear, accurate answers about aviation regulations and procedures without needing to know specific terminology.
								</p>
							</CardContent>
						</Card>

						<Card className="flex flex-col h-full">
							<CardHeader>
								<Search className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Intelligent Search</CardTitle>
								<CardDescription>
									Find relevant information instantly
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Our AI understands context and can locate specific regulations or procedures from thousands of pages of aviation documentation in seconds.
								</p>
							</CardContent>
						</Card>

						<Card className="flex flex-col h-full">
							<CardHeader>
								<Zap className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Dual AI Expertise</CardTitle>
								<CardDescription>
									Learn from multiple specialized assistants
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Interact with both Wilbur and Orville simultaneously to get comprehensive answers that cover both regulations and operational procedures.
								</p>
							</CardContent>
						</Card>

						<Card className="flex flex-col h-full">
							<CardHeader>
								<Clock className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Study History</CardTitle>
								<CardDescription>
									Track your learning progress
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Access your past conversations and study sessions to review important information and track your learning progress over time.
								</p>
							</CardContent>
						</Card>

						<Card className="flex flex-col h-full">
							<CardHeader>
								<BarChart3 className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Practice Questions</CardTitle>
								<CardDescription>
									Test your knowledge with quizzes
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Generate practice questions based on specific topics to test your understanding and prepare for actual examinations and checkrides.
								</p>
							</CardContent>
						</Card>

						<Card className="flex flex-col h-full">
							<CardHeader>
								<CloudLightning className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Always Up-to-Date</CardTitle>
								<CardDescription>
									Latest regulations and procedures
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<p className="text-sm text-muted-foreground">
									Our AI is regularly updated with the latest FAR and AIM changes, ensuring you always learn from the most current aviation regulations.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Advanced Usage Section */}
			<section id="advanced" className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								For Serious Flight Training
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Advanced features designed for serious student pilots and flight schools.
							</p>
						</div>
					</div>

					<div className="grid gap-12 md:grid-cols-2 lg:gap-16 mt-12">
						<div className="space-y-4">
							<Plane className="h-10 w-10 text-primary" />
							<h3 className="text-2xl font-bold">For Student Pilots</h3>
							<p className="text-muted-foreground">
								Whether you're just starting your flight training or preparing for your checkride, Wright Brothers AI gives you the knowledge edge.
							</p>
							<ul className="space-y-2 mt-4">
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Prepare for written exams with targeted practice</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Understand complex regulations in simple terms</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Study anytime, anywhere with mobile access</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Track your knowledge progress over time</span>
								</li>
							</ul>
							<Link href="/signup?type=student">
								<Button className="mt-4">Sign Up as Student</Button>
							</Link>
						</div>

						<div className="space-y-4">
							<BookOpen className="h-10 w-10 text-primary" />
							<h3 className="text-2xl font-bold">For Flight Schools</h3>
							<p className="text-muted-foreground">
								Enhance your curriculum with AI-powered resources that help your students master aviation knowledge more effectively.
							</p>
							<ul className="space-y-2 mt-4">
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Integrate with your existing training program</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Monitor student progress through admin dashboard</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Customize learning paths for different certificates</span>
								</li>
								<li className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-primary" />
									<span className="text-sm">Reduce instructor time on basic regulations teaching</span>
								</li>
							</ul>
							<Link href="/contact?inquiry=flight-school">
								<Button className="mt-4">Contact for Flight Schools</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6 flex flex-col items-center text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Ready to Transform Your Aviation Education?
					</h2>
					<p className="max-w-[700px] mb-8 md:text-xl/relaxed">
						Join thousands of student pilots using Wright Brothers AI to master aviation regulations and procedures faster and more effectively.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Link href="/signup">
							<Button variant="secondary" size="lg">
								Get Started Now
							</Button>
						</Link>
						<Link href="/chat?demo=true">
							<Button variant="outline" size="lg" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
								Try Demo
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}