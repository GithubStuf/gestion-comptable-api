export interface IClient extends IUpdateClientRequest {
    id: string;
    created_at: Date;
    updated_at: Date;
}

export interface IUpdateClientRequest {
    nom_client: string;
    adresse?: string | null;
    rc?: string | null;
    if?: string | null;
    nif?: string | null;
    nis?: string | null;
    code_tiers?: string | null;
}