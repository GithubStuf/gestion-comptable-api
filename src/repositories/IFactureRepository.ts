import { IResultPaginated, IFacture, IFactureRequest } from "../dtos";

export interface IFactureRepository {
    create(data: IFactureRequest): Promise<IFacture | Error>;
    update(id: string, data: IFactureRequest): Promise<IFacture | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IFacture>>;
    findById(id: string): Promise<IFacture | null>;
}