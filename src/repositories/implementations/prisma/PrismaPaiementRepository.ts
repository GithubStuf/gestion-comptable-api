import { IPaiementRequest, IPaiement, IResultPaginated } from "../../../dtos";
import { IPaiementRepository } from "../../IPaiementRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaPaiementRepository implements IPaiementRepository {
    private repository = prismaClient.paiement;

    async create(data: IPaiementRequest): Promise<IPaiement | Error> {
        const paiement = await this.repository.create({ data });
        return paiement;
    }

    async update(id: string, data: IPaiementRequest): Promise<IPaiement | Error> {
        const paiement = await this.repository.update({ data, where: { id } });
        return paiement;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IPaiement>> {
        const paiements = await this.repository.findMany();
        const result = await resultPaginated<IPaiement>(paiements, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IPaiement | null> {
        const paiement = await this.repository.findUnique({ where: { id } });
        return paiement;
    }
}