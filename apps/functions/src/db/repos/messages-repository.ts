import { Context } from "hono";
import { Env } from "../../types/bindings";
import type { Message } from "../../types/domain/message";

export class MessagesRepository {
  private db: D1Database;

  public constructor(context: Context<{ Bindings: Env }>) {
    this.db = context.env.DB;
  }

  public async getMessages() {
    const data: D1Result<Message> = await this.db
      .prepare("SELECT * FROM message;")
      .all();

    if (data.error) {
      throw Error(`Service error: ${data.error}`);
    }

    return data.results || [];
  }

  public async createMessage(entity: Message) {
    const data: D1Result<Message> = await this.db
      .prepare("INSERT INTO message (author, body) VALUES (?, ?);")
      .bind(entity.author, entity.body)
      .run();

    if (data.error) {
      throw Error(`Service error: ${data.error}`);
    }

    return data.meta.last_row_id;
  }
}
