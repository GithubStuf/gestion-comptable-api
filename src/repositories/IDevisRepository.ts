import { IResultPaginated, IDevis, IDevisRequest } from "../dtos";

export interface IDevisRepository {
    create(data: IDevisRequest): Promise<IDevis | Error>;
    update(id: string, data: IDevisRequest): Promise<IDevis | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IDevis>>;
    findById(id: string): Promise<IDevis | null>;
}