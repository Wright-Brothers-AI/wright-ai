import React, { createContext, useContext, useState } from 'react';

interface ChatContextType {
	currentlyStreamingBlockId: string | null;
	setCurrentlyStreamingBlockId: (id: string | null) => void;
}

const ChatContext = createContext<ChatContextType>({
	currentlyStreamingBlockId: null,
	setCurrentlyStreamingBlockId: () => { },
});

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
	const [currentlyStreamingBlockId, setCurrentlyStreamingBlockId] = useState<string | null>(null);

	return (
		<ChatContext.Provider
			value={{
				currentlyStreamingBlockId,
				setCurrentlyStreamingBlockId,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}; 