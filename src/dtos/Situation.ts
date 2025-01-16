import { IBase } from "./Base";
import { IDevis } from "./Devis";
import { IFacture } from "./Facture";

export interface ISituation extends IBase, ISituationRequest {
    devis?: IDevis;
    factures?: IFacture[];
}

export interface ISituationRequest {
    id_devis: string;
    periode: string;
    pourcentage_avancement: number;
    montant_ht: number;
    montant_tva: number;
    montant_ttc: number;
    statut: string;
}