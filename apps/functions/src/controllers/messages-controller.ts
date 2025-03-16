import { Context } from "hono";
import type { Env } from "@/types/bindings";
import { Message } from "@repo/db-schema/types";
import { createMessageRepository } from "@/db/db-client";
import { MessageRepository } from "@repo/db-schema/db/repositories";
import { CreateMessageRequest } from "@/types/request/create-message-request";

export class MessageController {
  private repository: MessageRepository;

  public constructor(context: Context<{ Bindings: Env }>) {
    this.repository = createMessageRepository(context);
  }

  public async getAll(): Promise<Message[]> {
    const result = await this.repository.findAll();

    if (!result) {
      throw Error("Server: Database not avaliable");
    }
    return result;
  }

  public async getById(id: number) {
    const result = await this.repository.findById(id);

    if (!result) {
      throw new Error(`Server: Message with id: ${id} not found`);
    }
    return result;
  }

  public async create(target: CreateMessageRequest) {
    const result = await this.repository.create({ ...target, id: 0 });

    if (!result) {
      throw new Error("Server: Creation invalidated");
    }
    return result;
  }
}
