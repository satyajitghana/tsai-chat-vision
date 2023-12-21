import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

import ChatMessage from "./chat-message";
import { ChatHandler } from "./chat.interface";

export default function ChatMessages(
  props: Pick<ChatHandler, "messages" | "isLoading">
) {
  const scrollableChatContainerRef = useRef<HTMLDivElement>(null);
  const messageLength = props.messages.length;
  const lastMessage = props.messages[messageLength - 1];

  const scrollToBottom = () => {
    if (scrollableChatContainerRef.current) {
      scrollableChatContainerRef.current.scrollTop =
        scrollableChatContainerRef.current.scrollHeight;
    }
  };

  const isLastMessageFromAssistant =
    messageLength > 0 && lastMessage?.role !== "user";

  // `isPending` indicate
  // that stream response is not yet received from the server,
  // so we show a loading indicator to give a better UX.
  const isPending = props.isLoading && !isLastMessageFromAssistant;

  useEffect(() => {
    scrollToBottom();
  }, [messageLength, lastMessage]);

  return (
    <div className="w-full m-4 shadow-xl px-4 md:max-w-4xl">
      <div
        className="flex h-[80vh] flex-col gap-5 divide-y overflow-y-auto pb-4"
        ref={scrollableChatContainerRef}
      >
        {props.messages.map((m) => (
          <ChatMessage key={m.id} {...m} />
        ))}
        {isPending && (
          <div className="flex justify-center items-center pt-10">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
