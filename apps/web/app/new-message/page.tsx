"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RedirectButton } from "@/components/redirect-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { postMessage } from "@/lib/queries/post-message";

export default function NewMessagePage() {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const target = { id: Date.now(), author, body };
      await postMessage(target);

      setAuthor("");
      setBody("");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Failed to submit the message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5">
        <RedirectButton
          icon="back"
          href="/"
          className="bg-blue-600 hover:bg-blue-500"
        >
          Back
        </RedirectButton>
        <h1 className="text-2xl font-bold mb-4">New Message</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mt-1 border rounded p-2"
          placeholder="Author"
          required
        />

        <Textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full mt-1 border rounded p-2"
          placeholder="Enter with the message"
          required
        ></Textarea>
        <Button
          type="submit"
          className="px-4 py-2 text-white rounded shadow hover:bg-zinc-700"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
