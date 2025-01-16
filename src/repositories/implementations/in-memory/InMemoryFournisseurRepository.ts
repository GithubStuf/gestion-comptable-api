import { v4 as uuid } from 'uuid';

import { IFournisseur, IFournisseurRequest } from "../../../dtos/Fournisseur";
import { IFournisseurRepository } from "../../IFournisseurRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryFournisseurRepository implements IFournisseurRepository {
    fournisseurs: IFournisseur[] = [];

    async create(data: IFournisseurRequest): Promise<IFournisseur | Error> {
        const newFournisseur = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.fournisseurs.push(newFournisseur);

        return newFournisseur;
    }

    async update(id: string, data: IFournisseurRequest): Promise<IFournisseur | Error> {
        const fournisseurIndex = this.fournisseurs.findIndex((fournisseur) => fournisseur.id === id);

        if (fournisseurIndex === -1) {
            return new Error("Fournisseur not found.");
        }

        const updatedFournisseur = {
            ...this.fournisseurs[fournisseurIndex],
            ...data,
            updated_at: new Date(),
        };

        this.fournisseurs[fournisseurIndex] = updatedFournisseur;

        return updatedFournisseur;
    }

    async delete(id: string): Promise<void> {
        this.fournisseurs = this.fournisseurs.filter((fournisseur) => fournisseur.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IFournisseur>> {
        return await resultPaginated<IFournisseur>(this.fournisseurs, page, perPage);
    }

    async findById(id: string): Promise<IFournisseur | null> {
        const fournisseur = this.fournisseurs.find((fournisseur) => fournisseur.id === id);
        return fournisseur ?? null;
    }
}