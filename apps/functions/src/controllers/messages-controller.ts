import { MessagesRepository } from "../db/repos/messages-repository";
import { Context } from "hono";
import type { Env } from "../types/bindings";
import { Message } from "../types/domain/message";

export class MessagesController {
  private repo: MessagesRepository;
  public constructor(context: Context<{ Bindings: Env }>) {
    this.repo = new MessagesRepository(context);
  }

  public async getMessages() {
    const result = await this.repo
      .getMessages()
      .catch((err) => console.log(err));

    if (!result) {
      throw Error("Server: Database not avaliable");
    }
    return result;
  }

  public async createMessage(target: Message) {
    const id = await this.repo
      .createMessage(target)
      .catch((err) => console.log(err));

    if (!id) {
      throw Error("Server: Creation invalidated");
    }

    return { id };
  }
}
