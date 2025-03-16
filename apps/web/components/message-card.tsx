import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { Message } from "@/lib/types/message";

interface MessageCardProps {
  message: Message;
}

export function MessageCard({ message }: MessageCardProps) {
  const { author, body } = message;
  return (
    <Card className="border rounded p-4 shadow-xs hover:shadow-md m-2">
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{body}</p>
      </CardContent>
      <CardHeader>
        <CardTitle>{author}</CardTitle>
      </CardHeader>
    </Card>
  );
}
