import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ChevronRight, FileText, MessageSquare, Plane } from 'lucide-react';
import Link from 'next/link';

const exampleQuestions = [
	{
		category: "FAR Questions (Wilbur)",
		icon: <FileText className="h-5 w-5 text-primary" />,
		questions: [
			"What are the requirements for a private pilot license?",
			"Explain FAR 91.103 regarding preflight action",
			"What medical certificate do I need for a commercial pilot license?"
		]
	},
	{
		category: "AIM Questions (Orville)",
		icon: <BookOpen className="h-5 w-5 text-primary" />,
		questions: [
			"How do I read METAR weather reports?",
			"Explain the different types of airspace",
			"What are the standard traffic pattern procedures?"
		]
	}
];

export function EmptyScreen() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-8">
			<div className="flex flex-col gap-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">
						Welcome to Wright Brothers AI
					</h1>
					<p className="text-lg text-muted-foreground">
						Your AI flight instructors are ready to help you master aviation regulations and procedures
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Plane className="h-5 w-5 text-primary" />
							Getting Started
						</CardTitle>
						<CardDescription>
							Ask Wilbur and Orville about any aviation topic, or try one of these example questions:
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-6">
						{exampleQuestions.map((category, i) => (
							<div key={i} className="space-y-3">
								<div className="flex items-center gap-2">
									{category.icon}
									<h3 className="font-medium">{category.category}</h3>
								</div>
								<div className="grid gap-2">
									{category.questions.map((question, j) => (
										<Button
											key={j}
											variant="outline"
											className="justify-start h-auto py-3 px-4 text-left"
											onClick={() => {
												const textarea = document.querySelector('textarea');
												if (textarea) {
													textarea.value = question;
													textarea.focus();
													// Trigger a change event to update any React state
													const event = new Event('input', { bubbles: true });
													textarea.dispatchEvent(event);
												}
											}}
										>
											<MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
											<span className="text-sm">{question}</span>
										</Button>
									))}
								</div>
							</div>
						))}
					</CardContent>
					<CardFooter className="flex flex-col gap-4 sm:flex-row items-center justify-between">
						<p className="text-sm text-muted-foreground">
							Your conversations will be saved so you can review them later
						</p>
						<Link href="/features">
							<Button variant="outline" className="flex items-center gap-1.5">
								Learn more about features
								<ChevronRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-lg flex items-center gap-2">
								<FileText className="h-4 w-4 text-primary" />
								About Wilbur AI
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Specializes in the Federal Aviation Regulations (FAR), helping you understand legal requirements and regulatory compliance for pilots.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-lg flex items-center gap-2">
								<BookOpen className="h-4 w-4 text-primary" />
								About Orville AI
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Expert in the Aeronautical Information Manual (AIM), providing guidance on recommended procedures, navigation, and operational information.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
