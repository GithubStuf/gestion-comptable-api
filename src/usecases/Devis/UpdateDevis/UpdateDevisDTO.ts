import { IDevisRequest } from "../../../dtos/Devis";

// Input DTO for updating a devis
export interface IUpdateDevisRequest extends IDevisRequest { }

// Output DTO for the updated devis
export interface IUpdateDevis extends IUpdateDevisRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}