import { IBase } from "./Base";
import { IStock } from "./Stock";

export interface IProduit extends IBase, IProduitRequest {
    stocks?: IStock[];
}

export interface IProduitRequest {
    nom_produit: string;
    categorie?: string | null;
}