import { ISituationRequest } from '../dtos/Situation';

export const createSituationMock: ISituationRequest = {
    id_devis: 'devis-uuid-1',
    periode: 'Q1 2023',
    pourcentage_avancement: 50,
    montant_ht: 500,
    montant_tva: 100,
    montant_ttc: 600,
    statut: 'En cours',
};

export const updateSituationMock: ISituationRequest = {
    id_devis: 'devis-uuid-2',
    periode: 'Q2 2023',
    pourcentage_avancement: 75,
    montant_ht: 750,
    montant_tva: 150,
    montant_ttc: 900,
    statut: 'Terminé',
};