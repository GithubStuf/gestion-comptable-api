import { v4 as uuid } from 'uuid';

import { IProduit, IProduitRequest } from "../../../dtos/Produit";
import { IProduitRepository } from "../../IProduitRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryProduitRepository implements IProduitRepository {
    produits: IProduit[] = [];

    async create(data: IProduitRequest): Promise<IProduit | Error> {
        const newProduit = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.produits.push(newProduit);

        return newProduit;
    }

    async update(id: string, data: IProduitRequest): Promise<IProduit | Error> {
        const produitIndex = this.produits.findIndex((produit) => produit.id === id);

        if (produitIndex === -1) {
            return new Error("Produit not found.");
        }

        const updatedProduit = {
            ...this.produits[produitIndex],
            ...data,
            updated_at: new Date(),
        };

        this.produits[produitIndex] = updatedProduit;

        return updatedProduit;
    }

    async delete(id: string): Promise<void> {
        this.produits = this.produits.filter((produit) => produit.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IProduit>> {
        return await resultPaginated<IProduit>(this.produits, page, perPage);
    }

    async findById(id: string): Promise<IProduit | null> {
        const produit = this.produits.find((produit) => produit.id === id);
        return produit ?? null;
    }
}