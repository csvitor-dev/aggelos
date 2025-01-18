import { getMessages } from "@/lib/queries/get-messages";
import { MessageCard } from "./message-card";

export default async function MessageList() {
  const messages = await getMessages();
  return (
    <div className="columns-3">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}
