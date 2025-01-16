import { IProduitRequest } from '../dtos/Produit';

export const createProduitMock: IProduitRequest = {
    nom_produit: 'Produit A',
    categorie: 'Catégorie A',
};

export const updateProduitMock: IProduitRequest = {
    nom_produit: 'Produit B',
    categorie: 'Catégorie B',
};