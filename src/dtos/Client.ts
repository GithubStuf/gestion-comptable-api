import { IBase } from "./Base";
import { IMarche } from "./Marche";
import { IDevis } from "./Devis";

export interface IClient extends IBase, IClientRequest {
    marches?: IMarche[];
    devis?: IDevis[];
}

export interface IClientRequest {
    nom_client: string;
    adresse?: string | null;
    rc?: string | null;
    if?: string | null;
    nif?: string | null;
    nis?: string | null;
    code_tiers?: string | null;
}