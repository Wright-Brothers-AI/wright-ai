import React from 'react';
import { ContentBlock } from "../../lib/types";
import { ChatBlock } from "./chatBlocks";

interface ContentQueueProps {
  items: ContentBlock[];
}

const ContentQueue: React.FC<ContentQueueProps> = ({ items }) => {
  const renderContentBlock = (item: ContentBlock) => {
    // Extract speaker from item, or default to assistant
    const speaker = item.speaker || 'concierge'; // Adjust this line based on how you determine the speaker

    // Determine alignment based on speaker
    const justifyClass = speaker === 'user' ? 'justify-end' : 'justify-start';

    return (
      <div className={`flex w-full ${justifyClass} my-1`} key={item.blockId}>
        {/* Use the ChatBlock for all content types and spread the item props */}
        <ChatBlock {...item}  />
      </div>
    );
  };

  return (
    <div className="space-y-2">  {/* Add space between messages */}
      {items.map(renderContentBlock)}
    </div>
  );
};

export default ContentQueue;
