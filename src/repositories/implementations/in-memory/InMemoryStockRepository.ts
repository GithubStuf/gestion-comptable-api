import { v4 as uuid } from 'uuid';

import { IStock, IStockRequest } from "../../../dtos/Stock";
import { IStockRepository } from "../../IStockRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryStockRepository implements IStockRepository {
    stocks: IStock[] = [];

    async create(data: IStockRequest): Promise<IStock | Error> {
        const newStock = {
            ...data,
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.stocks.push(newStock);

        return newStock;
    }

    async update(id: string, data: IStockRequest): Promise<IStock | Error> {
        const stockIndex = this.stocks.findIndex((stock) => stock.id === id);

        if (stockIndex === -1) {
            return new Error("Stock not found.");
        }

        const updatedStock = {
            ...this.stocks[stockIndex],
            ...data,
            updated_at: new Date(),
        };

        this.stocks[stockIndex] = updatedStock;

        return updatedStock;
    }

    async delete(id: string): Promise<void> {
        this.stocks = this.stocks.filter((stock) => stock.id !== id);
    }

    async findAll(page: number, perPage: number): Promise<IResultPaginated<IStock>> {
        return await resultPaginated<IStock>(this.stocks, page, perPage);
    }

    async findById(id: string): Promise<IStock | null> {
        const stock = this.stocks.find((stock) => stock.id === id);
        return stock ?? null;
    }
}