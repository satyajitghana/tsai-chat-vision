"use client";

// import { useChat } from "ai/react";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";
import { useState } from "react";
import { useChat } from "./use-chat";

export default function ChatSection() {
  const { messages, input, isLoading, handleSubmit, handleInputChange } =
    useChat({
      //     initialMessages: [
      //       {
      //         role: "user",
      //         content: "Hi, how are you?",
      //         id: "10",
      //       },
      //       {
      //         role: "assistant",
      //         content: `Certainly! The best colors and outfit choices for a photoshoot can depend on various factors such as your skin tone, the location, and the overall mood you want to convey. Here are some general tips that might help you choose the right colors and outfits
      // ${"```"}python
      // def quicksort(arr):
      //     if len(arr) <= 1:
      //         return arr
      //     pivot = arr[len(arr) // 2]
      //     left = [x for x in arr if x < pivot]
      //     middle = [x for x in arr if x == pivot]
      //     right = [x for x in arr if x > pivot]
      //     return quicksort(left) + middle + quicksort(right)
      // # Example usage:
      // arr = [3, 6, 8, 10, 1, 2, 1]
      // print(quicksort(arr))
      // ${"```"}
      // Output:
      // ${"```"}
      // [1, 1, 2, 3, 6, 8, 10]
      // ${"```"}
      // `,
      //         id: "101",
      //       },
      //       {
      //         role: "user",
      //         content: "Hi, how are you?",
      //         id: "1023",
      //       },
      //       {
      //         role: "assistant",
      //         content: `Certainly! The best colors and outfit choices for a photoshoot can depend on various factors such as your skin tone, the location, and the overall mood you want to convey. Here are some general tips that might help you choose the right colors and outfits
      // Output:
      // ${"```"}
      // [1, 1, 2, 3, 6, 8, 10]
      // ${"```"}
      // `,
      //         id: "10123",
      //       },
      //     ],
    });

  // const messages: any[] = [];
  // const isLoading = false;
  // const [input, setInput] = useState("");

  // const handleSubmit = (e: any, cro: any) => {
  //   console.log(e, cro);
  //   e.preventDefault();

  //   console.log(input);
  // };

  // const handleInputChange = (e: any) => {
  //   console.log(e);
  //   setInput(e.target.value);
  // };

  return (
    <>
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
        multiModal
      />
    </>
  );
}
