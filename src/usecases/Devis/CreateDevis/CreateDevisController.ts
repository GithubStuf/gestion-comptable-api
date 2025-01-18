import { Request, Response } from 'express';
import { CreateDevisUseCase } from './CreateDevisUseCase';
import { ICreateDevisRequest } from './CreateDevisDTO';

export class CreateDevisController {
    constructor(
        private createDevisUseCase: CreateDevisUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { num_devis, date_devis, date_expiration, id_client, id_marche, montant_ht, montant_tva, montant_ttc, statut_devis } = request.body;

        try {
            const data: ICreateDevisRequest = {
                num_devis,
                date_devis: new Date(date_devis),
                date_expiration: new Date(date_expiration),
                id_client,
                id_marche,
                montant_ht,
                montant_tva,
                montant_ttc,
                statut_devis,
            };

            const result = await this.createDevisUseCase.execute(data);

            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}