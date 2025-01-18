import { IDevis } from "../../../dtos/Devis";

// Output DTO for listing devis
export interface IFindAllDevisResponse {
    devis: IDevis[];
    total: number;
    page: number;
    perPage: number;
}