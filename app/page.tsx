import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import ChatSection from "@/components/chat/chat-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ChatSection />
    </main>
  );
}
