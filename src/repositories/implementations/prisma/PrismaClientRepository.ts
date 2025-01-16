import { IClientRequest, IClient, IResultPaginated } from "../../../dtos";
import { IClientRepository } from "../../IClientRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaClientRepository implements IClientRepository {
  private repository = prismaClient.client;

  async create(data: IClientRequest): Promise<IClient | Error> {
    const client = await this.repository.create({ data });
    return client;
  }

  async update(id: string, data: IClientRequest): Promise<IClient | Error> {
    const client = await this.repository.update({ data, where: { id } });
    return client;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated<IClient>> {
    const clients = await this.repository.findMany();
    const result = await resultPaginated<IClient>(clients, page, perPage);
    return result;
  }

  async findById(id: string): Promise<IClient | null> {
    const client = await this.repository.findUnique({ where: { id } });
    return client;
  }
}