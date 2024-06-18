'use client';
import React, {
	useState,
	useEffect,
	useRef,
	FormEvent,
	ChangeEvent,
	useCallback,
} from "react";

import ContentQueue from "@/components/chat/contentQueue"; // Adjust path as necessary
import {
	ContentBlock,
	ContentType,
	StreamingType,
	SpeakerType,
	PipelineModel,
} from "@/lib/deprecated/types";  // Assume types are exported from a types file
import { useAssistant } from "@ai-sdk/react";
import { Message } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useUIState } from 'ai/rsc';
import { useAIState } from 'ai/rsc';


export default function Chat() {
	// const [uiMessages, setUiMessages] = useUIState();
	// const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
	// 	{
	// 		blockId: `wright_welcome`, // Generate a unique ID for the new block
	// 		type: ContentType.Welcome,
	// 		content: "Hello, my name is Wilbur. How can I assist you today?",
	// 		streamingType: StreamingType.fake,
	// 		speaker: SpeakerType.wilbur,
	// 	},
	// ]);
	// const [conciergeStreamBlockId, setConciergeStreamBlockId] = useChatContext();
	// const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);
	// const { status, messages, input, submitMessage, handleInputChange, error } =
	// 	useAssistant({
	// 		api: "/api/assistants/conciergeInitial",
	// 		body: {
	// 			vendor: "openai",
	// 			model: "gpt-4-turbo-preview",
	// 			callingFunction: "scoreQuestion",
	// 			pipelineModel: new PipelineModel({ history: [], session_id: "test20" }),
	// 		},
	// 	});
	// const [oldMessageIds, setOldMessageIds] = useState<String[]>([]);

	// // UI Helper Functions
	// const addContentBlock = (
	// 	blockId: string,
	// 	type: ContentType,
	// 	streamingType: StreamingType,
	// 	content: string,
	// 	speaker: SpeakerType
	// ) => {
	// 	const newBlock: ContentBlock = {
	// 		blockId: blockId,
	// 		type: type,
	// 		content: content,
	// 		streamingType: streamingType,
	// 		speaker: speaker, // Add speaker information directly in the content block
	// 	};
	// 	setContentBlocks([...contentBlocks, newBlock]);
	// };
	// const askAbeNewQuestion = async (question: string) => {
	// 	const questionText = question.trim();

	// 	addContentBlock(`abe_icon_${messages.length}`, ContentType.OrvilleSpeaker, StreamingType.noStream, "", SpeakerType.orville);

	// 	const abe_api_key: string = "conciergeTestKey";
	// 	const request = {
	// 		abe_api_key: abe_api_key,
	// 		question: questionText, // Ensure to trim and use the cleaned text
	// 		jurisdiction: "mhl", // A list of questions that have already been answered
	// 	};

	// 	console.log("Sending request to AskAbeAI API");
	// 	const response = await fetch(
	// 		"https:www.askabeai.com/api/externalAPI/privateQA",
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				//Add any additional headers your API might require
	// 			},
	// 			body: JSON.stringify(request),
	// 		}
	// 	);

	// 	if (!response.ok) {
	// 		console.error("Failed to fetch answer from Abe API:", response.status);
	// 		return;  // Handle errors or unsuccessful requests appropriately
	// 	}

	// 	console.log("Received response from Abe API");
	// 	const response_json = await response.json();

	// 	let answer = response_json.answer || "Sorry, no answer available.";  // Default message if no answer

	// 	addContentBlock(
	// 		`wilbur${messages.length}`,
	// 		ContentType.Answer,
	// 		StreamingType.fake,
	// 		answer,
	// 		SpeakerType.wilbur
	// 	);
	// };

	// function updateContentBlocks(blockId: string, newContent: string) {
	// 	for (let block of contentBlocks) {
	// 		if (block.blockId === blockId) {
	// 			block.content = newContent;
	// 			return;
	// 		}
	// 	}
	// }

	// const processChatMessage = (message: Message) => {
	// 	const { id, role, content } = message;
	// 	const speakerType =
	// 		role === "user" ? SpeakerType.user : SpeakerType.wilbur;
	// 	const contentType =
	// 		role === "user" ? ContentType.Question : ContentType.Answer;
	// 	const streamingType =
	// 		role === "user" ? StreamingType.noStream : StreamingType.real;
	// 	console.log(`SpeakerType: ${speakerType}\nContentType: ${contentType}\nStreamingType: ${streamingType}`);
	// 	console.log(`Id: ${id}, role: ${role}, content: ${content}`);
	// 	// Check if this is the currently streaming id
	// 	if (id !== conciergeStreamBlockId) {
	// 		// New message ID, add to tracking and create a block
	// 		setOldMessageIds((prevIds) => [...prevIds, id]);
	// 		addContentBlock(id, contentType, streamingType, content, speakerType);
	// 		setConciergeStreamBlockId(id);
	// 	} else {
	// 		// Update existing block with new content
	// 		console.log(`Updating block with ${content}`);
	// 		updateContentBlocks(id, content);
	// 	}
	// };

	// const processFunctionMessage = async (message: Message) => {
	// 	console.log(`Function call received! ${message}`);
	// };

	// interface FunctionCallData {
	// 	messageType: "functionCall";
	// 	functionCalled: string;
	// 	parameters: any;
	// 	description: string;
	// }
	// const processDataMessage = async (message: Message) => {
	// 	console.log(message);
	// 	if (!message.data) {
	// 		return;
	// 	}
	// 	const data = message.data as string;
	// 	const functionCallData: FunctionCallData = JSON.parse(data);
	// 	// Check if the message is of type 'functionCall'
	// 	if (functionCallData.messageType! === "functionCall") {
	// 		if (functionCallData.functionCalled === "ConsultAbeForLegalInformation") {
	// 			askAbeNewQuestion(functionCallData.parameters["query"]);
	// 		}
	// 	}

	// 	setOldMessageIds((prevIds) => [...prevIds, message.id]);
	// };

	// useEffect(() => {
	// 	console.log(`Status changed to: ${status}`);
	// 	if (status == "awaiting_message") {
	// 		setOldMessageIds((prevIds) => [...prevIds, conciergeStreamBlockId]);
	// 		setConciergeStreamBlockId("NULL");
	// 	}
	// }, [status]);

	// useEffect(() => {
	// 	if (conciergeStreamBlockId !== "null") {
	// 		setShowLoadingIcon(true);
	// 	} else {
	// 		setShowLoadingIcon(false);
	// 	}
	// }, [conciergeStreamBlockId]);

	// // useEffect to log changes to messages
	// useEffect(() => {
	// 	console.log(`Length of messages: ${messages.length}`);

	// 	if (messages.length == 0) {
	// 		return;
	// 	}

	// 	console.log(messages[0]);
	// 	messages.forEach((message) => {
	// 		console.log(message);
	// 		const { id, role, content } = message;
	// 		console.log(`Id: ${id}, role: ${role}, content: ${content}`);
	// 		if (id === "") {
	// 			console.log(`Ignored message with no ID!`);
	// 		} else if (role === "user" && !id.includes("msg_")) {
	// 			console.log(`Ignoring preliminary user message!`);
	// 		} else if (oldMessageIds.includes(id) && id !== conciergeStreamBlockId) {
	// 			console.log(`Ignoring old message ID!`);
	// 		} else if (role === "assistant" || role === "user") {
	// 			console.log("Moving to processChatMessage!");
	// 			processChatMessage(message);
	// 		} else if (role === "function") {
	// 			console.log("Moving to processFunctionMessage!");
	// 			processFunctionMessage(message);
	// 		} else if (role === "data") {
	// 			console.log("Moving to processDataMessage");
	// 			processDataMessage(message);
	// 		} else {
	// 			console.log(`Ignored message from role: ${role}`);
	// 		}
	// 	});
	// }, [messages]);

	return (
		<div>
		</div>

		// <ChatContextProvider
		// 	value={{
		// 		currentlyStreamingBlockId: conciergeStreamBlockId,
		// 		showLoadingIcon,
		// 	}}
		// >
		// 	<div className="flex-shrink-0 overflow-x-hidden h-full bg-gray-900 text-gray-200">
		// 		<div className="flex bg-gray-800 h-screen min-h-0 flex-col">
		// 			<div className="overflow-y-auto flex-grow p-4  rounded-lg">
		// 				<ContentQueue items={contentBlocks} />
		// 			</div>
		// 			<form className="flex items-center p-4 " onSubmit={submitMessage}>
		// 				<Input
		// 					disabled={status !== "awaiting_message"}
		// 					className="flex-1 p-2 text-gray-200 border-none focus:outline-none focus:ring-0"
		// 					value={input}
		// 					placeholder="Type your message..."
		// 					onChange={handleInputChange}
		// 				/>
		// 				<Button
		// 					type="submit"
		// 					className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
		// 					disabled={status !== "awaiting_message"}
		// 				>
		// 					Send
		// 				</Button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </ChatContextProvider>


	);
}
