import { v4 as uuid } from 'uuid';

import { IClient, IClientRequest } from "../../../dtos/Client";
import { IClientRepository } from "../../IClientRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryClientRepository implements IClientRepository {
    clients: IClient[] = [];

    async create(data: IClientRequest): Promise<IClient | Error> {
        const newClient = {
            ...data,
            id: uuid(),
            adresse: data.adresse ?? null,
            rc: data.rc ?? null,
            if: data.if ?? null,
            nif: data.nif ?? null,
            nis: data.nis ?? null,
            code_tiers: data.code_tiers ?? null,
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.clients.push(newClient);

        return newClient;
    }

    async update(id: string, data: IClientRequest): Promise<IClient | Error> {
        const clientIndex = this.clients.findIndex((client) => client.id === id);

        if (clientIndex === -1) {
            return new Error("Client not found.");
        }

        const updatedClient = {
            ...this.clients[clientIndex],
            ...data,
            updated_at: new Date(),
        };

        this.clients[clientIndex] = updatedClient;

        return updatedClient;
    }

    async delete(id: string): Promise<void> {
        this.clients = this.clients.filter((client) => client.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IClient>> {
        return await resultPaginated<IClient>(this.clients, page, perPage);
    }

    async findById(id: string): Promise<IClient | null> {
        const client = this.clients.find((client) => client.id === id);
        return client ?? null;
    }
}