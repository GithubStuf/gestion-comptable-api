import { ISituationRequest, ISituation, IResultPaginated } from "../../../dtos";
import { ISituationRepository } from "../../ISituationRepository";
import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaSituationRepository implements ISituationRepository {
    private repository = prismaClient.situation;

    async create(data: ISituationRequest): Promise<ISituation | Error> {
        const situation = await this.repository.create({ data });
        return situation;
    }

    async update(id: string, data: ISituationRequest): Promise<ISituation | Error> {
        const situation = await this.repository.update({ data, where: { id } });
        return situation;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ where: { id } });
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<ISituation>> {
        const situations = await this.repository.findMany();
        const result = await resultPaginated<ISituation>(situations, page, perPage);
        return result;
    }

    async findById(id: string): Promise<ISituation | null> {
        const situation = await this.repository.findUnique({ where: { id } });
        return situation;
    }
}