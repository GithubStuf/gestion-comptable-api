import { IMarcheRequest } from "../../../dtos/Marche";

// Input DTO for creating a marche
export interface ICreateMarcheRequest extends IMarcheRequest { }

// Output DTO for the created marche
export interface ICreateMarche extends ICreateMarcheRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}