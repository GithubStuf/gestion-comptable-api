import { IResultPaginated, IProduit, IProduitRequest } from "../dtos";

export interface IProduitRepository {
    create(data: IProduitRequest): Promise<IProduit | Error>;
    update(id: string, data: IProduitRequest): Promise<IProduit | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IProduit>>;
    findById(id: string): Promise<IProduit | null>;
}