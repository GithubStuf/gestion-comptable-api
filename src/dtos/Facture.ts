import { IBase } from "./Base";
import { ISituation } from "./Situation";
import { IPaiement } from "./Paiement";

export interface IFacture extends IBase, IFactureRequest {
    situation?: ISituation;
    paiements?: IPaiement[];
}

export interface IFactureRequest {
    id_situation: string;
    date_facture: Date;
    montant_ht: number;
    montant_tva: number;
    montant_ttc: number;
    statut_facture: string;
}