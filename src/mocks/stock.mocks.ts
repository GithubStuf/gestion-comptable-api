import { IStockRequest } from '../dtos/Stock';

export const createStockMock: IStockRequest = {
    id_fournisseur: 'fournisseur-uuid-1',
    id_produit: 'produit-uuid-1',
    quantite: 100,
    emplacement: 'Entrepôt A',
    seuil_min: 10,
};

export const updateStockMock: IStockRequest = {
    id_fournisseur: 'fournisseur-uuid-2',
    id_produit: 'produit-uuid-2',
    quantite: 200,
    emplacement: 'Entrepôt B',
    seuil_min: 20,
};