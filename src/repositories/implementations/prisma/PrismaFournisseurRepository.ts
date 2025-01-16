import { IFournisseurRequest, IFournisseur, IResultPaginated } from "../../../dtos";
import { IFournisseurRepository } from "../../IFournisseurRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaFournisseurRepository implements IFournisseurRepository {
    private repository = prismaClient.fournisseur;

    async create(data: IFournisseurRequest): Promise<IFournisseur | Error> {
        const fournisseur = await this.repository.create({ data });
        return fournisseur;
    }

    async update(id: string, data: IFournisseurRequest): Promise<IFournisseur | Error> {
        const fournisseur = await this.repository.update({ data, where: { id } });
        return fournisseur;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IFournisseur>> {
        const fournisseurs = await this.repository.findMany();
        const result = await resultPaginated<IFournisseur>(fournisseurs, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IFournisseur | null> {
        const fournisseur = await this.repository.findUnique({ where: { id } });
        return fournisseur;
    }
}