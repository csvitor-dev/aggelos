import { message } from "../schema";
import { DbClient } from "../..";
import { Message } from "../../types/message";
import { eq } from "drizzle-orm";

export class MessageRepository {
  public constructor(private readonly db: DbClient) {}

  public async findAll() {
    const result = await this.db
      .select({
        id: message.id,
        author: message.author,
        body: message.body,
      })
      .from(message);

    return result as Message[];
  }

  public async findById(id: number) {
    const result = await this.db
      .select({
        id: message.id,
        author: message.author,
        body: message.body,
      })
      .from(message)
      .where(eq(message.id, id));

    return result[0] as Message;
  }

  public async create(entity: Message) {
    const result = await this.db
      .insert(message)
      .values({ author: entity.author, body: entity.body })
      .returning({
        messageId: message.id,
        author: message.author,
      });

    return result[0];
  }
}
