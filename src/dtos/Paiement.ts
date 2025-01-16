import { IBase } from "./Base";
import { IFacture } from "./Facture";

export interface IPaiement extends IBase, IPaiementRequest {
    facture?: IFacture;
}

export interface IPaiementRequest {
    id_facture: string;
    montant_paiement: number;
    date_paiement: Date;
    mode_paiement: string;
    statut_paiement: string;
}