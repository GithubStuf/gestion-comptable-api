import { v4 as uuid } from 'uuid';

import { IFacture, IFactureRequest } from "../../../dtos/Facture";
import { IFactureRepository } from "../../IFactureRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryFactureRepository implements IFactureRepository {
    factures: IFacture[] = [];

    async create(data: IFactureRequest): Promise<IFacture | Error> {
        const newFacture = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.factures.push(newFacture);

        return newFacture;
    }

    async update(id: string, data: IFactureRequest): Promise<IFacture | Error> {
        const factureIndex = this.factures.findIndex((facture) => facture.id === id);

        if (factureIndex === -1) {
            return new Error("Facture not found.");
        }

        const updatedFacture = {
            ...this.factures[factureIndex],
            ...data,
            updated_at: new Date(),
        };

        this.factures[factureIndex] = updatedFacture;

        return updatedFacture;
    }

    async delete(id: string): Promise<void> {
        this.factures = this.factures.filter((facture) => facture.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IFacture>> {
        return await resultPaginated<IFacture>(this.factures, page, perPage);
    }

    async findById(id: string): Promise<IFacture | null> {
        const facture = this.factures.find((facture) => facture.id === id);
        return facture ?? null;
    }
}