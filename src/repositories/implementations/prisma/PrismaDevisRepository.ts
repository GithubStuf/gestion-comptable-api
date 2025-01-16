import { IDevisRequest, IDevis, IResultPaginated } from "../../../dtos";
import { IDevisRepository } from "../../IDevisRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaDevisRepository implements IDevisRepository {
    private repository = prismaClient.devis;

    async create(data: IDevisRequest): Promise<IDevis | Error> {
        const devis = await this.repository.create({ data });
        return devis;
    }

    async update(id: string, data: IDevisRequest): Promise<IDevis | Error> {
        const devis = await this.repository.update({ data, where: { id } });
        return devis;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IDevis>> {
        const devis = await this.repository.findMany();
        const result = await resultPaginated<IDevis>(devis, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IDevis | null> {
        const devis = await this.repository.findUnique({ where: { id } });
        return devis;
    }
}