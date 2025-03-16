import { Message } from "@/lib/types/message";
import { MessageCard } from "./message-card";
import { For } from "./utils/for";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3">
      <For each={messages}>
        {(elem: Message) => <MessageCard key={elem.id} message={elem} />}
      </For>
    </div>
  );
}
