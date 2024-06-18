import { nanoid } from '@/lib/utils';
import { Chat } from '@/components/chat';
import { AI } from '@/lib/chat/actions';
import { createClient } from '@/lib/supabase-auth/server';
import { Session } from '@/lib/types';
import { getMissingKeys } from '@/app/actions';

export const metadata = {
	title: 'Wright Brothers AI Chat'
};

export default async function IndexPage() {
	const id = nanoid();
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	// Check the user is authenticated
	if (error || !data?.user.id) {
		return {
			error: 'Unauthorized'
		};
	}
	const session: Session = {user: { id: data.user.id!, email: data.user.email! }}

	const missingKeys = await getMissingKeys();

	return (
		<AI initialAIState={{ chatId: id, messages: [] }}>
			<Chat id={id} session={session} missingKeys={missingKeys} />
		</AI>
	);
}