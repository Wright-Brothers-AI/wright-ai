import { Message, APIUsage, APIParameters } from './types';
import openAI from 'openai';
import ChatCompletionMessageParam from 'openai';



export function convertToMessages(system: string, user: string): Message[] {
  return [
    { role: 'system', content: system },
    { role: 'user', content: user }
  ];
}




function createChatCompletionInstructor(params: APIParameters): [string | undefined, APIUsage] {
  // Placeholder implementation
  return ["", {} as APIUsage];
}

function createChatCompletionAnthropic(params: APIParameters): [string | undefined, APIUsage] {
  // Placeholder implementation
  return ["", {} as APIUsage];
}

export async function createChatCompletion(params: APIParameters, insertUsage: boolean = true, vendorClient: openAI): Promise<[string | undefined, APIUsage]> {
  let responseTuple: [string | undefined, APIUsage];

  const vendorLower = params.vendor.toLowerCase();
  if (vendorLower === 'openai') {
    responseTuple = await createChatCompletionOpenai(params, vendorClient);
  } else if (vendorLower.includes('instructor/')) {
    responseTuple = createChatCompletionInstructor(params);
  } else if (vendorLower === 'anthropic') {
    responseTuple = createChatCompletionAnthropic(params);
  } else {
    throw new Error("Unsupported vendor");
  }
  
  if (insertUsage) {
    responseTuple[1].insert();
  }

  return responseTuple;
}

async function createChatCompletionOpenai(params: APIParameters, openaiClient: openAI): Promise<[string | undefined, APIUsage]> {
  const start = new Date(); // Capture start time
  let content: string | undefined = undefined;
  let inputTokens: number | undefined = undefined;
  let outputTokens: number | undefined = undefined;
  let totalTokens: number | undefined = undefined;
  let responseId: string | undefined = undefined;
  let status = 200; // Default to success
  let errorMessage: string | undefined = undefined;
  let duration: number | undefined = undefined;
  
  try {
    
    const completion: any = await openaiClient.chat.completions.create({
      model: params.model,
      messages: params.messages,
      temperature: params.temperature,
      top_p: params.top_p,
      frequency_penalty: params.frequency_penalty,
      presence_penalty: params.presence_penalty,
      stream: params.stream,
      response_format: params.response_format
      // Additional properties as required
    });

    if (!completion || !completion.choices || completion.choices.length === 0) {
      throw new Error(`OpenAI API call failed or returned no choices.`);
    }

    content = completion.choices[0].message.content;
    responseId = completion.id;
    // Assume usage data is correctly populated in the completion object
    inputTokens = completion.usage?.promptTokens || null;
    outputTokens = completion.usage?.completionTokens || null;
    totalTokens = completion.usage?.totalTokens || null;
    duration = new Date().getTime() - start.getTime();

  } catch (error) {
    console.error("Error calling OpenAI:", error);
    status = 400; // Indicate failure
    errorMessage = error instanceof Error ? error.message : 'Unknown error';
    // Generate a unique response_id for error tracking (using Date.now() as an example)
    responseId = `ERROR-${Date.now()}`;
  }

  
  // Create APIUsage instance
  const usage = new APIUsage(
    responseId!,
    params.calling_function!, // Assuming callingFunction is known/static in this context
    params.vendor,
    params.model,
    status,
    null, // sessionId would be set according to your application logic
    inputTokens,
    null, // Assuming ragTokens needs to be calculated or provided differently
    outputTokens,
    totalTokens,
    null, // inputCost needs to be calculated or provided differently
    null, // ragCost needs to be calculated or provided differently
    null, // outputCost needs to be calculated or provided differently
    null, // totalCost needs to be calculated or provided differently
    errorMessage,
    duration,
    null, // apiKeyName would be set according to your application logic
    new Date() // timestamp
  );

  return [content, usage];
}