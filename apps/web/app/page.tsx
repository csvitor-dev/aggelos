"use client";

import MessageList from "@/components/message-list";
import { RedirectButton } from "@/components/redirect-button";
import { Message } from "@/lib/types/message";
import { useEffect, useState } from "react";
import { getMessages } from "./actions/message";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages();

      if (data.length === 0) {
        return;
      }

      setMessages(data);
    };
    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-end mb-5">
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
