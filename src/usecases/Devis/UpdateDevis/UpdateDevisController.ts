import { Request, Response } from 'express';
import { UpdateDevisUseCase } from './UpdateDevisUseCase';

export class UpdateDevisController {
    constructor(
        private updateDevisUseCase: UpdateDevisUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { num_devis, date_devis, date_expiration, id_client, id_marche, montant_ht, montant_tva, montant_ttc, statut_devis } = request.body;

        try {
            const data = await this.updateDevisUseCase.execute(id, {
                num_devis,
                date_devis: new Date(date_devis),
                date_expiration: new Date(date_expiration),
                id_client,
                id_marche,
                montant_ht,
                montant_tva,
                montant_ttc,
                statut_devis,
            });

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}