import { v4 as uuid } from 'uuid';

import { IMarche, IMarcheRequest } from "../../../dtos/Marche";
import { IMarcheRepository } from "../../IMarcheRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryMarcheRepository implements IMarcheRepository {
    marches: IMarche[] = [];

    async create(data: IMarcheRequest): Promise<IMarche | Error> {
        const newMarche = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.marches.push(newMarche);

        return newMarche;
    }

    async update(id: string, data: IMarcheRequest): Promise<IMarche | Error> {
        const marcheIndex = this.marches.findIndex((marche) => marche.id === id);

        if (marcheIndex === -1) {
            return new Error("Marche not found.");
        }

        const updatedMarche = {
            ...this.marches[marcheIndex],
            ...data,
            updated_at: new Date(),
        };

        this.marches[marcheIndex] = updatedMarche;

        return updatedMarche;
    }

    async delete(id: string): Promise<void> {
        this.marches = this.marches.filter((marche) => marche.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IMarche>> {
        return await resultPaginated<IMarche>(this.marches, page, perPage);
    }

    async findById(id: string): Promise<IMarche | null> {
        const marche = this.marches.find((marche) => marche.id === id);
        return marche ?? null;
    }
}