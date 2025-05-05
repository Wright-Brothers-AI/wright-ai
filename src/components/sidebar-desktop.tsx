import { ChatHistory } from '@/components/chat-history';
import { Sidebar } from '@/components/sidebar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase-auth/server';
import { BookOpen, FileText, Plane } from 'lucide-react';
import Link from 'next/link';

export async function SidebarDesktop() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	// Check the user is authenticated
	if (error || !data?.user.id) {
		return null;
	}

	return (
		<Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px] flex-col">
			<div className="px-4 py-4">
				<div className="flex items-center gap-2 mb-1">
					<Plane className="h-5 w-5 text-primary" />
					<h2 className="font-semibold text-lg">Wright Brothers AI</h2>
				</div>
				<div className="flex gap-1.5 mb-4">
					<Badge variant="secondary" className="text-xs">
						<FileText className="h-3 w-3 mr-1" />
						Wilbur
					</Badge>
					<Badge variant="secondary" className="text-xs">
						<BookOpen className="h-3 w-3 mr-1" />
						Orville
					</Badge>
				</div>
				<Separator className="my-2" />
			</div>

			<div className="flex-1 overflow-auto">
				<ChatHistory userId={data.user.id} />
			</div>

			<div className="px-4 py-4 border-t">
				<div className="flex flex-col gap-2">
					<div className="text-xs text-muted-foreground mb-1">
						Aviation Learning Resources
					</div>
					<Link href="/features" className="text-xs hover:text-primary transition-colors">
						FAR/AIM References
					</Link>
					<Link href="/pricing" className="text-xs hover:text-primary transition-colors">
						Upgrade Your Plan
					</Link>
					<Link href="/" className="text-xs hover:text-primary transition-colors">
						Help & Documentation
					</Link>
				</div>
				<Separator className="my-3" />
				<div className="text-xs text-muted-foreground text-center">
					Wright Brothers AI v1.0
				</div>
			</div>
		</Sidebar>
	);
}
