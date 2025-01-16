import { IPaiementRequest } from '../dtos/Paiement';

export const createPaiementMock: IPaiementRequest = {
    id_facture: 'facture-uuid-1',
    montant_paiement: 600,
    date_paiement: new Date('2023-10-20'),
    mode_paiement: 'Virement bancaire',
    statut_paiement: 'Terminé',
};

export const updatePaiementMock: IPaiementRequest = {
    id_facture: 'facture-uuid-2',
    montant_paiement: 900,
    date_paiement: new Date('2023-11-20'),
    mode_paiement: 'Carte de crédit',
    statut_paiement: 'En attente',
};