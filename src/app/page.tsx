"use client";
// File: /app/home/page.tsx
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textArea';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

import clouds from '../../public/clouds.jpeg';
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
			<div className="flex flex-col">
				<div className="flex overflow-hidden relative flex-col items-center justify-center px-16 py-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
					<video
						className="absolute top-0 left-0 w-full h-full object-cover"
						autoPlay
						loop
						muted
						playsInline
						src="/cloud-loop.mp4"
					>
						Provided by freepik.com
					</video>
					<div className="relative z-10 flex flex-col items-center justify-center text-center">
						<div className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-[67px] max-md:text-4xl max-md:leading-[54px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Wright Brothers AI
						</div>
						<div className="mt-6 text-lg leading-7 max-md:max-w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Your AI-Powered Flight Instructors
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex overflow-hidden relative flex-col justify-center items-center p-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
						<Image
							src="/clouds.jpg"
							alt="Background"
							layout="fill"
							objectFit="cover"
						/>

						<div className="relative mt-56 text-6xl font-bold text-center leading-[67px] w-[800px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Begin your AI powered flight education
						</div>
						<div className="relative mt-6 text-lg leading-7 text-center w-[768px] max-md:max-w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Interact with our AI Aviation Experts
						</div>
						<div className="flex relative gap-4 items-start pt-4 mt-6 mb-36 text-base leading-6 whitespace-nowrap max-md:mb-10">
							<Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
								Chat with Wilbur and Oroville
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center py-12 w-full bg-white max-md:max-w-full">
					<div className="w-full max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex flex-col pl-12 w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow justify-center self-stretch px-8 py-20 max-md:px-5 max-md:max-w-full">
									<div className="text-6xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
										Explore Aviation with AI
									</div>
									<div id="nav1" className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
										Wright Brothers AI offers advanced AI solutions to help you navigate the complexities of aviation regulations and flight information.
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow self-stretch w-full max-md:max-w-full">
									<Image
										src="/atc.jpg"
										alt="Aviation Image"
										width={500}
										height={477}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex overflow-hidden relative flex-col justify-center px-16 py-20 min-h-[900px] max-md:px-5">
					<Image
						loading="lazy"
						src="/navigate.jpg"
						layout="fill"
						objectFit="cover"
						className="absolute inset-0"
						alt="Aviation Background"
					/>
					<div className="relative mt-8 max-md:mr-1 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex relative flex-col grow justify-end self-stretch pt-20 text-white max-md:mt-10 max-md:max-w-full">
									<div className="mt-96 text-5xl font-bold leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
										Enhance Your Knowledge
									</div>
									<div className="mt-2 text-6xl font-bold leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
										with Dynamic AI
									</div>
									<div className="flex gap-4 items-start self-start pt-4 mt-4 text-base leading-6 whitespace-nowrap">
										<div className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
											Learn More
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
								<div className="relative text-xl leading-7 text-white max-md:mt-10 max-md:max-w-full">
									Our AI extends comprehensive aviation knowledge dynamically, ensuring you have access to accurate information when you need it.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="flex overflow-hidden relative flex-col justify-center items-center p-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
					<Image
						src="/knowledgeHub.jpg"
						alt="Background"
						layout="fill"
						objectFit="cover"
					/>
					<div className="relative mt-52 text-6xl font-bold text-center leading-[67px] w-[768px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
						Accurate Primary Source Legislation
					</div>
					<div className="relative mt-6 text-lg leading-7 text-center w-[768px] max-md:max-w-full">
						Wright Brothers AI sources all information directly from primary source legislation and regulations.
					</div>
					<div className="flex relative gap-4 items-start pt-4 mt-6 mb-36 text-base leading-6 whitespace-nowrap max-md:mb-10">
						<div className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
							Learn How
						</div>
					</div>
				</div> */}

				<div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
					<div className="w-full max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow justify-center self-stretch px-16 py-20 max-md:px-5 max-md:max-w-full">
									<div className="mt-52 text-6xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
										About Wilbur AI
									</div>
									<div id="wilbur" className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
										Wilbur AI specializes in interpreting the Code of Federal Regulations (FAR), providing precise and reliable information to ensure you stay compliant with aviation laws.
									</div>
									<div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
										<div className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
											Learn More About Wilbur AI
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow self-stretch w-full max-md:max-w-full">
									<Image
										src="/wilbur.jpeg"
										alt="Wilbur AI"
										width={500}
										height={477}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center px-16 py-20 w-full bg-background max-md:px-5 max-md:max-w-full">
					<div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex flex-col w-2/3 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
									<div id="privacy" className="text-4xl font-bold leading-10 max-md:max-w-full">
										About Orville AI
									</div>
									<div id="orville" className="mt-6 text-lg leading-7 max-md:max-w-full">
										Orville AI focuses on the Aeronautical Information Manual (AIM), offering in-depth guidance and insights to help you understand and follow aviation protocols effectively.
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full">
								<Image
									loading="lazy"
									src="/orville.jpeg"
									alt="Orville AI"
									width={1000}
									height={960}
									className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
					<div className="w-full max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0">
							<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow justify-center self-stretch px-16 py-20 max-md:px-5 max-md:max-w-full">
									<div className="mt-52 text-6xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
										Value Proposition
									</div>
									<div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
										Wright Brothers AI provides unmatched accuracy and comprehensive insights into aviation regulations, helping you stay informed and compliant effortlessly.
									</div>
									<div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
										<div className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
											Discover Our Benefits
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</main>
	);
}


