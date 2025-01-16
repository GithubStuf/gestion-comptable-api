import { IClientRequest } from '../dtos/Client';

export const createClientMock: IClientRequest = {
  nom_client: 'Dupont Jean',
  adresse: '123 Rue de Paris',
  rc: 'RC12345',
  if: 'IF12345',
  nif: 'NIF12345',
  nis: 'NIS12345',
  code_tiers: 'CT12345',
};

export const updateClientMock: IClientRequest = {
  nom_client: 'Martin Sophie',
  adresse: '456 Avenue des Champs-Élysées',
  rc: 'RC67890',
  if: 'IF67890',
  nif: 'NIF67890',
  nis: 'NIS67890',
  code_tiers: 'CT67890',
};