import { IBase } from "./Base";
import { IClient } from "./Client";
import { IDevis } from "./Devis";

export interface IMarche extends IBase, IMarcheRequest {
    client?: IClient;
    devis?: IDevis[];
}

export interface IMarcheRequest {
    nom_marche: string;
    type_marche: string;
    id_client: string;
    statut: string;
}