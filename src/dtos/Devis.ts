import { IBase } from "./Base";
import { IClient } from "./Client";
import { IMarche } from "./Marche";
import { ISituation } from "./Situation";

export interface IDevis extends IBase, IDevisRequest {
    client?: IClient;
    marche?: IMarche;
    situations?: ISituation[];
}

export interface IDevisRequest {
    num_devis: string;
    date_devis: Date;
    date_expiration: Date;
    id_client: string;
    id_marche: string;
    montant_ht: number;
    montant_tva: number;
    montant_ttc: number;
    statut_devis: string;
}