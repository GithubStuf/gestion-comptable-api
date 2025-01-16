import { IMarcheRequest } from "../../../dtos/Marche";

// Input DTO for updating a marche
export interface IUpdateMarcheRequest extends IMarcheRequest { }

// Output DTO for the updated marche
export interface IUpdateMarche extends IUpdateMarcheRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}