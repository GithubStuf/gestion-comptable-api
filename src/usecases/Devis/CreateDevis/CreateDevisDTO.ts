import { IDevisRequest } from "../../../dtos/Devis";

// Input DTO for creating a devis
export interface ICreateDevisRequest extends IDevisRequest { }

// Output DTO for the created devis
export interface ICreateDevis extends ICreateDevisRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}