import MessageList from "@/components/message-list";
import { RedirectButton } from "@/components/redirect-button";

export default async function HomePage() {
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
      <MessageList />
    </div>
  );
}
