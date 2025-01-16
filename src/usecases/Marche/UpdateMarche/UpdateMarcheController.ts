import { Request, Response } from 'express';
import { UpdateMarcheUseCase } from './UpdateMarcheUseCase';

export class UpdateMarcheController {
    constructor(
        private updateMarcheUseCase: UpdateMarcheUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { nom_marche, type_marche, id_client, statut } = request.body;

        try {
            const data = await this.updateMarcheUseCase.execute(id, {
                nom_marche,
                type_marche,
                id_client,
                statut,
            });

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}