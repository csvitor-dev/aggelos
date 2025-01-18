import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Message {
  id: number;
  author: string;
  body: string;
}

interface MessageCardProps {
  message: Message;
}

export function MessageCard({ message }: MessageCardProps) {
  const { author, body } = message;
  return (
    <Card className="border rounded p-4 shadow-sm hover:shadow-md">
      <CardHeader>
        <CardTitle>{author}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{body}</p>
      </CardContent>
    </Card>
  );
}
