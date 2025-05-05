'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IconPlus } from '@/components/ui/icons';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/toolTip';
import { type AI } from '@/lib/chat/actions';
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit';
import { useActions, useUIState } from 'ai/rsc';
import { BookOpen, FileText, LucideIcon, Plane, SendHorizontal } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import { UserMessage } from './stocks/message';

type AssistantType = 'both' | 'wilbur' | 'orville';

interface AssistantInfo {
	id: AssistantType;
	name: string;
	icon: LucideIcon;
	color: string;
	description: string;
}

const assistants: AssistantInfo[] = [
	{
		id: 'both',
		name: 'Both',
		icon: Plane,
		color: 'bg-primary text-primary-foreground',
		description: 'Ask both Wilbur & Orville'
	},
	{
		id: 'wilbur',
		name: 'Wilbur',
		icon: FileText,
		color: 'bg-blue-600 text-white',
		description: 'FAR Expert'
	},
	{
		id: 'orville',
		name: 'Orville',
		icon: BookOpen,
		color: 'bg-emerald-600 text-white',
		description: 'AIM Expert'
	}
];

export function PromptForm({
	input,
	setInput
}: {
	input: string;
	setInput: (value: string) => void;
}) {
	const router = useRouter();
	const { formRef, onKeyDown } = useEnterSubmit();
	const inputRef = React.useRef<HTMLTextAreaElement>(null);
	const { submitUserMessage } = useActions();
	const [_, setMessages] = useUIState<typeof AI>();
	const [selectedAssistant, setSelectedAssistant] = React.useState<AssistantType>('both');
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Blur focus on mobile
		if (window.innerWidth < 600) {
			inputRef.current?.blur();
		}

		const value = input.trim();
		if (!value) return;

		setIsLoading(true);
		setInput('');

		// Add assistant info to the message
		const prefixedValue = selectedAssistant !== 'both'
			? `[Asking ${selectedAssistant === 'wilbur' ? 'Wilbur about FAR' : 'Orville about AIM'}]: ${value}`
			: value;

		// Optimistically add user message UI
		setMessages(currentMessages => [
			...currentMessages,
			{
				id: nanoid(),
				display: <UserMessage>{value}</UserMessage>
			}
		]);

		// Submit and get response message
		try {
			const responseMessage = await submitUserMessage(prefixedValue);
			setMessages(currentMessages => [...currentMessages, responseMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<Tabs
				defaultValue="both"
				className="w-full"
				onValueChange={(value) => setSelectedAssistant(value as AssistantType)}
			>
				<TabsList className="grid grid-cols-3 w-full">
					{assistants.map((assistant) => {
						const Icon = assistant.icon;
						return (
							<TabsTrigger
								key={assistant.id}
								value={assistant.id}
								className="flex items-center gap-2 py-2"
							>
								<Icon className="h-4 w-4" />
								<span className="hidden sm:inline">{assistant.name}</span>
							</TabsTrigger>
						);
					})}
				</TabsList>
				<div className="flex justify-center my-2">
					<Badge variant="secondary" className="text-xs px-2 py-0">
						{assistants.find(a => a.id === selectedAssistant)?.description || ''}
					</Badge>
				</div>
			</Tabs>

			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="relative"
			>
				<div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4 hover:bg-muted"
								onClick={() => {
									router.push('/new');
								}}
							>
								<IconPlus />
								<span className="sr-only">New Chat</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>New Chat</TooltipContent>
					</Tooltip>
					<Textarea
						ref={inputRef}
						tabIndex={0}
						onKeyDown={onKeyDown}
						placeholder={`Ask ${selectedAssistant === 'both' ? 'Wilbur & Orville' : selectedAssistant} a question...`}
						className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
						autoFocus
						spellCheck={false}
						autoComplete="off"
						autoCorrect="off"
						name="message"
						rows={1}
						value={input}
						onChange={e => setInput(e.target.value)}
						disabled={isLoading}
					/>
					<div className="absolute right-0 top-[13px] sm:right-4">
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									type="submit"
									size="icon"
									disabled={input === '' || isLoading}
									className={selectedAssistant !== 'both' ? assistants.find(a => a.id === selectedAssistant)?.color : ''}
								>
									{isLoading ? (
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
									) : (
										<SendHorizontal className="h-4 w-4" />
									)}
									<span className="sr-only">Send message</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Send message</TooltipContent>
						</Tooltip>
					</div>
				</div>
			</form>
		</div>
	);
}
