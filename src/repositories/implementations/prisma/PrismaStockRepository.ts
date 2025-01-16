import { IStockRequest, IStock, IResultPaginated } from "../../../dtos";
import { IStockRepository } from "../../IStockRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaStockRepository implements IStockRepository {
    private repository = prismaClient.stock;

    async create(data: IStockRequest): Promise<IStock | Error> {
        const stock = await this.repository.create({ data });
        return stock;
    }

    async update(id: string, data: IStockRequest): Promise<IStock | Error> {
        const stock = await this.repository.update({ data, where: { id } });
        return stock;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IStock>> {
        const stocks = await this.repository.findMany();
        const result = await resultPaginated<IStock>(stocks, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IStock | null> {
        const stock = await this.repository.findUnique({ where: { id } });
        return stock;
    }
}