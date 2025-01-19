"use client";

import MessageList from "@/components/message-list";
import { RedirectButton } from "@/components/redirect-button";
import { Message } from "@/lib/types/message";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api").catch((err) => console.log(err));

      if (!response) {
        return;
      }
      const data = (await response.json()) satisfies Message[];

      setMessages(data);
    };
    fetchMessages();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <RedirectButton
          icon="send"
          href="/new-message"
          className="bg-emerald-600 hover:bg-emerald-500"
        >
          Add New Message
        </RedirectButton>
      </div>
      <MessageList messages={messages} />
    </div>
  );
}
