import { IResultPaginated, IClient, IClientRequest } from "../dtos";

export interface IClientRepository {
    create(data: IClientRequest): Promise<IClient | Error>;
    update(id: string, data: IClientRequest): Promise<IClient | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IClient>>;
    findById(id: string): Promise<IClient | null>;
}