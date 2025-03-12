import { message } from "../schema";
import { D1Database } from "@cloudflare/workers-types";
import { createD1Connection, DbClient } from "../..";
import { Message } from "../../types/message";

export class MessageRepository {
  public constructor(private readonly db: DbClient) {}

  public async getMessages() {
    const result = await this.db
      .select({
        id: message.id,
        author: message.author,
        body: message.body,
      })
      .from(message);
    return result;
  }

  public async createMessage(entity: Message) {
    const result = await this.db
      .insert(message)
      .values({ author: entity.author, body: entity.body })
      .returning({
        author: message.author,
      });

    return result[0].author;
  }
}
