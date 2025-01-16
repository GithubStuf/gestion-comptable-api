import { IResultPaginated, IFournisseur, IFournisseurRequest } from "../dtos";

export interface IFournisseurRepository {
    create(data: IFournisseurRequest): Promise<IFournisseur | Error>;
    update(id: string, data: IFournisseurRequest): Promise<IFournisseur | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<IFournisseur>>;
    findById(id: string): Promise<IFournisseur | null>;
}