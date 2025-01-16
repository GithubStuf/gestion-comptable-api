import { IProduitRequest, IProduit, IResultPaginated } from "../../../dtos";
import { IProduitRepository } from "../../IProduitRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaProduitRepository implements IProduitRepository {
    private repository = prismaClient.produit;

    async create(data: IProduitRequest): Promise<IProduit | Error> {
        const produit = await this.repository.create({ data });
        return produit;
    }

    async update(id: string, data: IProduitRequest): Promise<IProduit | Error> {
        const produit = await this.repository.update({ data, where: { id } });
        return produit;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IProduit>> {
        const produits = await this.repository.findMany();
        const result = await resultPaginated<IProduit>(produits, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IProduit | null> {
        const produit = await this.repository.findUnique({ where: { id } });
        return produit;
    }
}