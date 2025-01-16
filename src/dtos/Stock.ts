import { IBase } from "./Base";
import { IFournisseur } from "./Fournisseur";
import { IProduit } from "./Produit";

export interface IStock extends IBase, IStockRequest {
    fournisseur?: IFournisseur;
    produit?: IProduit;
}

export interface IStockRequest {
    id_fournisseur: string;
    id_produit: string;
    quantite: number;
    emplacement?: string | null;
    seuil_min?: number | null;
}