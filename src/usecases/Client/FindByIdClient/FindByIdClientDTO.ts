import { IClient } from "../../../dtos/Client";

export interface IFindByIdClientRequest {
    id: string;
}

export interface IFindByIdClientResponse {
    data: IClient | null;
}