import { Message } from "@/lib/types/message";
import { MessageCard } from "./message-card";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="grid grid-cols-3">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}
