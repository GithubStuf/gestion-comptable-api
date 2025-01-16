import { IMarcheRequest, IMarche, IResultPaginated } from "../../../dtos";
import { IMarcheRepository } from "../../IMarcheRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaMarcheRepository implements IMarcheRepository {
    private repository = prismaClient.marche;

    async create(data: IMarcheRequest): Promise<IMarche | Error> {
        const marche = await this.repository.create({ data });
        return marche;
    }

    async update(id: string, data: IMarcheRequest): Promise<IMarche | Error> {
        const marche = await this.repository.update({ data, where: { id } });
        return marche;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IMarche>> {
        const marches = await this.repository.findMany();
        const result = await resultPaginated<IMarche>(marches, page, perPage);
        return result;
    }

    async findById(id: string): Promise<IMarche | null> {
        const marche = await this.repository.findUnique({ where: { id } });
        return marche;
    }
}