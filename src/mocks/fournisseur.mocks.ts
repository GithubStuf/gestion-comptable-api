import { IFournisseurRequest } from '../dtos/Fournisseur';

export const createFournisseurMock: IFournisseurRequest = {
    nom_fournisseur: 'Fournisseur A',
    adresse: '123 Rue de Lyon',
    telephone: '01 23 45 67 89',
};

export const updateFournisseurMock: IFournisseurRequest = {
    nom_fournisseur: 'Fournisseur B',
    adresse: '456 Rue de Marseille',
    telephone: '09 87 65 43 21',
};