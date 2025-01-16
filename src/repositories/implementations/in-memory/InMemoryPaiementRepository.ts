import { v4 as uuid } from 'uuid';

import { IPaiement, IPaiementRequest } from "../../../dtos/Paiement";
import { IPaiementRepository } from "../../IPaiementRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryPaiementRepository implements IPaiementRepository {
    paiements: IPaiement[] = [];

    async create(data: IPaiementRequest): Promise<IPaiement | Error> {
        const newPaiement = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.paiements.push(newPaiement);

        return newPaiement;
    }

    async update(id: string, data: IPaiementRequest): Promise<IPaiement | Error> {
        const paiementIndex = this.paiements.findIndex((paiement) => paiement.id === id);

        if (paiementIndex === -1) {
            return new Error("Paiement not found.");
        }

        const updatedPaiement = {
            ...this.paiements[paiementIndex],
            ...data,
            updated_at: new Date(),
        };

        this.paiements[paiementIndex] = updatedPaiement;

        return updatedPaiement;
    }

    async delete(id: string): Promise<void> {
        this.paiements = this.paiements.filter((paiement) => paiement.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IPaiement>> {
        return await resultPaginated<IPaiement>(this.paiements, page, perPage);
    }

    async findById(id: string): Promise<IPaiement | null> {
        const paiement = this.paiements.find((paiement) => paiement.id === id);
        return paiement ?? null;
    }
}