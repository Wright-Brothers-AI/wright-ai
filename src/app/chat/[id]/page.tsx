import { type Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { SidebarDesktop } from '@/components/sidebar-desktop';
import { createClient } from '@/lib/supabase-auth/server';
import { getChat, getMissingKeys } from '@/app/actions';
import { Chat } from '@/components/chat';
import { AI } from '@/lib/chat/actions';
import { Session } from '@/lib/types';

export interface ChatPageProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({
	params
}: ChatPageProps): Promise<Metadata> {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	// Check the user is authenticated
	if (error || !data?.user.id) {
		return {};
	}

	const chat = await getChat(params.id, data.user.id);
	return {
		title: chat?.title.toString().slice(0, 50) ?? 'Chat'
	};
}

export default async function ChatPage({ params }: ChatPageProps) {
	console.log(`Initializing chat page!`)
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	console.log(JSON.stringify(data, null, 2))
	// Check the user is authenticated
	if (error || !data?.user.id) {
		return {
			error: 'Unauthorized'
		};
	}
	const session: Session = { user: { id: data.user.id!, email: data.user.email! } };
	console.log(session)
	const missingKeys = await getMissingKeys();
	console.log(missingKeys)

	if (!session?.user) {
		redirect(`/login?next=/chat/${params.id}`);
	}

	const userId = session.user.id as string;
	const chat = await getChat(params.id, userId);

	if (!chat) {
		redirect('/');
	}

	if (chat?.userId !== session?.user?.id) {
		notFound();
	}

	return (
		<div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
	  <AI initialAIState={{ chatId: chat.id, messages: chat.messages }}>
			<Chat
				id={chat.id}
				session={session}
				initialMessages={chat.messages}
				missingKeys={missingKeys}
			/>
		</AI>
      
    </div>
		
	);
}
