'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import Link from 'next/link';

export function UserMenu() {
	const isAuthenticated = false; // This would come from auth state in real implementation

	return (
		<div className="flex items-center justify-between">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="rounded-full">
						<User className="h-5 w-5" />
						<span className="sr-only">User menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-56">
					{isAuthenticated ? (
						<>
							<DropdownMenuItem asChild>
								<Link href="/profile" className="cursor-pointer">
									Profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/chat" className="cursor-pointer">
									My Chats
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/settings" className="cursor-pointer">
									Settings
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								className="text-destructive cursor-pointer"
								onClick={() => {
									// Sign out logic would go here
								}}
							>
								Sign Out
							</DropdownMenuItem>
						</>
					) : (
						<>
							<DropdownMenuItem asChild>
								<Link href="/login" className="cursor-pointer">
									Sign In
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/signup" className="cursor-pointer">
									Create Account
								</Link>
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
