import { IMarche } from "../../../dtos/Marche";

// Output DTO for listing marches
export interface IFindAllMarchesResponse {
    marches: IMarche[];
    total: number;
    page: number;
    perPage: number;
}