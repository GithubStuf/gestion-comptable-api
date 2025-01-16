import { IResultPaginated, IStock, IStockRequest } from "../dtos";

export interface IStockRepository {
    create(data: IStockRequest): Promise<IStock | Error>;
    update(id: string, data: IStockRequest): Promise<IStock | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IStock>>;
    findById(id: string): Promise<IStock | null>;
}