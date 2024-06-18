"use client";
// File: /app/home/page.tsx
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textArea';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [question, setQuestion] = useState('');
	const [response, setResponse] = useState({ wilbur: '', orville: '' });

	const handleAsk = async () => {
		// Placeholder for API call to fetch responses from AI
		setResponse({
			wilbur: 'Loading response from AIM...',
			orville: 'Loading response from FAR...'
		});

		// Simulate API response
		setTimeout(() => {
			setResponse({
				wilbur: 'Response based on Aeronautical Information Manual.',
				orville: 'Response based on Federal Aviation Regulations.'
			});
		}, 2000);
	};

	return (
        <main>
            <div className="flex flex-col min-h-screen">
                <div className="relative flex flex-col items-center justify-center w-full h-64 md:h-96">
                    <Image
                        src="/clouds.jpeg"
                        alt="Clouds banner"
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-3xl md:text-5xl">Welcome to Wright Brothers AI</h1>
                    </div>
                </div>
                <div className="flex-grow p-8">
                    <div className="text-center p-4 text-black">
                        <p>Explore aviation regulations and flight information with AI-guided assistance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <Card>
                            <Textarea placeholder="Ask Wilbur a question about AIM" value={question} onChange={(e) => setQuestion(e.target.value)} />
                            <Button onClick={handleAsk}>Ask Wilbur</Button>
                            <p>{response.wilbur}</p>
                        </Card>
                        <Card>
                            <Textarea placeholder="Ask Orville a question about FAR" value={question} onChange={(e) => setQuestion(e.target.value)} />
                            <Button onClick={handleAsk}>Ask Orville</Button>
                            <p>{response.orville}</p>
                        </Card>
                    </div>
                </div>
                <footer className="bg-muted text-muted-foreground p-4 text-center">
                    © 2024 Wright Brothers AI. All rights reserved.
                </footer>
            </div>
        </main>
    );
};


