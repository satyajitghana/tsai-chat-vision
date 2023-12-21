import { Check, Copy } from "lucide-react";

import { Message } from "./chat.interface";
import { Button } from "../ui/button";
import ChatAvatar from "./chat-avatar";
import Markdown from "../markdown";
import { useCopyToClipboard } from "../use-copy-to-clipboard";
import Image from "next/image";

export default function ChatMessage(chatMessage: any) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  // console.log(chatMessage.content);

  if (chatMessage.content === undefined) return <></>;

  return (
    <div className="flex items-start gap-4 pr-5 pt-5">
      <ChatAvatar role={chatMessage.role} />

      <div className="group flex flex-col flex-1 justify-between gap-2">
        {chatMessage?.options?.data?.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={chatMessage.options.data.imageUrl}
            alt="input"
            className="w-full rounded-md"
          />
        )}
        <div className="flex-1">
          <Markdown content={chatMessage.content} />
        </div>
        <Button
          onClick={() => copyToClipboard(chatMessage.content)}
          size="icon"
          variant="ghost"
          className="h-8 w-8 opacity-0 group-hover:opacity-100"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
