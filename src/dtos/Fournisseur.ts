import { IBase } from "./Base";
import { IStock } from "./Stock";

export interface IFournisseur extends IBase, IFournisseurRequest {
    stocks?: IStock[];
}

export interface IFournisseurRequest {
    nom_fournisseur: string;
    adresse?: string | null;
    telephone?: string | null;
}