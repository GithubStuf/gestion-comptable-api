import { IMarcheRequest } from '../dtos/Marche';

export const createMarcheMock: IMarcheRequest = {
    nom_marche: 'Marché de Lyon',
    type_marche: 'Type A',
    id_client: 'client-uuid-1',
    statut: 'Actif',
};

export const updateMarcheMock: IMarcheRequest = {
    nom_marche: 'Marché de Marseille',
    type_marche: 'Type B',
    id_client: 'client-uuid-2',
    statut: 'Inactif',
};