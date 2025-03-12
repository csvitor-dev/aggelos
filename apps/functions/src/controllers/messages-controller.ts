import { Context } from "hono";
import type { Env } from "@/types/bindings";
import { Message } from "@repo/db-schema/types";
import { createMessageRepository } from "@/db/db-client";
import { MessageRepository } from "@repo/db-schema/db/repositories";
import { CreateMessageRequest } from "@/types/request/create-message-request";

export class MessagesController {
  private repository: MessageRepository;

  public constructor(context: Context<{ Bindings: Env }>) {
    this.repository = createMessageRepository(context);
  }

  public async getMessages(): Promise<Message[]> {
    const result = await this.repository.getMessages();

    if (!result) {
      throw Error("Server: Database not avaliable");
    }
    return result;
  }

  public async createMessage(target: CreateMessageRequest) {
    const author = await this.repository.createMessage({ ...target, id: 0 });

    if (!author) {
      throw Error("Server: Creation invalidated");
    }
    return { author };
  }
}
