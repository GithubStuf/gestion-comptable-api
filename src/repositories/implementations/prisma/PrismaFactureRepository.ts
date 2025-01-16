import { IFactureRequest, IFacture, IResultPaginated } from "../../../dtos";
import { IFactureRepository } from "../../IFactureRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaFactureRepository implements IFactureRepository {
    private repository = prismaClient.facture;

    async create(data: IFactureRequest): Promise<IFacture | Error> {
        const facture = await this.repository.create({ data });
        return facture;
    }

    async update(id: string, data: IFactureRequest): Promise<IFacture | Error> {
        const facture = await this.repository.update({ data, where: { id } });
        return facture;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IFacture>> {
        const factures = await this.repository.findMany();
        const result = await resultPaginated<IFacture>(factures, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IFacture | null> {
        const facture = await this.repository.findUnique({ where: { id } });
        return facture;
    }
}