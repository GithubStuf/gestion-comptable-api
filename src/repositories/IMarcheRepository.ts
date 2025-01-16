import { IResultPaginated, IMarche, IMarcheRequest } from "../dtos";

export interface IMarcheRepository {
    create(data: IMarcheRequest): Promise<IMarche | Error>;
    update(id: string, data: IMarcheRequest): Promise<IMarche | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IMarche>>;
    findById(id: string): Promise<IMarche | null>;
}