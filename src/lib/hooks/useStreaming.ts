import { useEffect, useState } from 'react';
import { StreamingType } from '../deprecated/types';

export function useStreaming(content: string, streamingType: StreamingType): string {
	const [displayContent, setDisplayContent] = useState<string>('');

	useEffect(() => {
		if (streamingType === StreamingType.noStream) {
			setDisplayContent(content);
			return;
		}

		// For instant streaming, immediately show content
		if (streamingType === StreamingType.fake) {
			setDisplayContent(content);
			return;
		}

		// For character-by-character streaming
		if (streamingType === StreamingType.real) {
			let currentIndex = 0;
			const interval = setInterval(() => {
				if (currentIndex <= content.length) {
					setDisplayContent(content.slice(0, currentIndex));
					currentIndex += 1;
				} else {
					clearInterval(interval);
				}
			}, 20); // Adjust speed as needed

			return () => clearInterval(interval);
		}
	}, [content, streamingType]);

	return displayContent;
} 