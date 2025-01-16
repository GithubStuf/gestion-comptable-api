import { IClientRequest } from "../../../dtos/Client";

// Input DTO for creating a client
export interface ICreateClientRequest extends IClientRequest { }

// Output DTO for the created client
export interface ICreateClient extends ICreateClientRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}