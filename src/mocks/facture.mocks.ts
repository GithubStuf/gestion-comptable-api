import { IFactureRequest } from '../dtos/Facture';

export const createFactureMock: IFactureRequest = {
    id_situation: 'situation-uuid-1',
    date_facture: new Date('2023-10-15'),
    montant_ht: 500,
    montant_tva: 100,
    montant_ttc: 600,
    statut_facture: 'Impayée',
};

export const updateFactureMock: IFactureRequest = {
    id_situation: 'situation-uuid-2',
    date_facture: new Date('2023-11-15'),
    montant_ht: 750,
    montant_tva: 150,
    montant_ttc: 900,
    statut_facture: 'Payée',
};