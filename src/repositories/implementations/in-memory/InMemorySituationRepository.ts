import { v4 as uuid } from 'uuid';

import { ISituation, ISituationRequest } from "../../../dtos/Situation";
import { ISituationRepository } from "../../ISituationRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemorySituationRepository implements ISituationRepository {
    situations: ISituation[] = [];

    async create(data: ISituationRequest): Promise<ISituation | Error> {
        const newSituation = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.situations.push(newSituation);

        return newSituation;
    }

    async update(id: string, data: ISituationRequest): Promise<ISituation | Error> {
        const situationIndex = this.situations.findIndex((situation) => situation.id === id);

        if (situationIndex === -1) {
            return new Error("Situation not found.");
        }

        const updatedSituation = {
            ...this.situations[situationIndex],
            ...data,
            updated_at: new Date(),
        };

        this.situations[situationIndex] = updatedSituation;

        return updatedSituation;
    }

    async delete(id: string): Promise<void> {
        this.situations = this.situations.filter((situation) => situation.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<ISituation>> {
        return await resultPaginated<ISituation>(this.situations, page, perPage);
    }

    async findById(id: string): Promise<ISituation | null> {
        const situation = this.situations.find((situation) => situation.id === id);
        return situation ?? null;
    }
}