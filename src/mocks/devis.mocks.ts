import { IDevisRequest } from '../dtos/Devis';

export const createDevisMock: IDevisRequest = {
    num_devis: 'DEV12345',
    date_devis: new Date('2023-10-01'),
    date_expiration: new Date('2023-12-31'),
    id_client: 'client-uuid-1',
    id_marche: 'marche-uuid-1',
    montant_ht: 1000,
    montant_tva: 200,
    montant_ttc: 1200,
    statut_devis: 'En attente',
};

export const updateDevisMock: IDevisRequest = {
    num_devis: 'DEV67890',
    date_devis: new Date('2023-11-01'),
    date_expiration: new Date('2024-01-31'),
    id_client: 'client-uuid-2',
    id_marche: 'marche-uuid-2',
    montant_ht: 1500,
    montant_tva: 300,
    montant_ttc: 1800,
    statut_devis: 'Approuvé',
};