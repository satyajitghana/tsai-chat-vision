import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { siteConfig } from "@/config/site";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: "NONE",
  // baseURL: "http://localhost:8000/v1"
  baseURL: siteConfig.modelBackend,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // 'data' contains the additional data that you have sent:
  const { messages, data } = await req.json();

  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];

  // console.log(initialMessages, currentMessage, data);

  const mappedInitialMessages = initialMessages.map((message: any) => {
    const contents: any[] = [];

    if (message?.options?.data?.imageUrl) {
      contents.push({
        type: "image_url",
        image_url: {
          url: message.options.data.imageUrl,
        },
      });
    }

    contents.push({ type: "text", text: message.content });

    return {
      ...message,
      content: contents,
    };
  });

  const contents: any[] = [];

  if (data?.imageUrl) {
    contents.push({
      type: "image_url",
      image_url: {
        url: data.imageUrl,
      },
    });
  }

  contents.push({ type: "text", text: currentMessage.content });

  const newMessage = {
    role: currentMessage.role,
    content: contents,
  };

  // console.log(newMessage);

  // console.log("final payload", [...mappedInitialMessages, newMessage]);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    stream: true,
    max_tokens: 150,
    messages: [...mappedInitialMessages, newMessage],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
