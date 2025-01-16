import { v4 as uuid } from 'uuid';

import { IDevis, IDevisRequest } from "../../../dtos/Devis";
import { IDevisRepository } from "../../IDevisRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryDevisRepository implements IDevisRepository {
    devis: IDevis[] = [];

    async create(data: IDevisRequest): Promise<IDevis | Error> {
        const newDevis = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.devis.push(newDevis);

        return newDevis;
    }

    async update(id: string, data: IDevisRequest): Promise<IDevis | Error> {
        const devisIndex = this.devis.findIndex((devis) => devis.id === id);

        if (devisIndex === -1) {
            return new Error("Devis not found.");
        }

        const updatedDevis = {
            ...this.devis[devisIndex],
            ...data,
            updated_at: new Date(),
        };

        this.devis[devisIndex] = updatedDevis;

        return updatedDevis;
    }

    async delete(id: string): Promise<void> {
        this.devis = this.devis.filter((devis) => devis.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IDevis>> {
        return await resultPaginated<IDevis>(this.devis, page, perPage);
    }

    async findById(id: string): Promise<IDevis | null> {
        const devis = this.devis.find((devis) => devis.id === id);
        return devis ?? null;
    }
}