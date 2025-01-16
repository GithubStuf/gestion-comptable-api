import { IResultPaginated, ISituation, ISituationRequest } from "../dtos";

export interface ISituationRepository {
    create(data: ISituationRequest): Promise<ISituation | Error>;
    update(id: string, data: ISituationRequest): Promise<ISituation | Error>;
    delete(id: string): Promise<void>;
    findAll(page: number, perPage: number): Promise<IResultPaginated<ISituation>>;
    findById(id: string): Promise<ISituation | null>;
}