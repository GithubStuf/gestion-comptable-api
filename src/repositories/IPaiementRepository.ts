import { IResultPaginated, IPaiement, IPaiementRequest } from "../dtos";

export interface IPaiementRepository {
    create(data: IPaiementRequest): Promise<IPaiement | Error>;
    update(id: string, data: IPaiementRequest): Promise<IPaiement | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IPaiement>>;
    findById(id: string): Promise<IPaiement | null>;
}