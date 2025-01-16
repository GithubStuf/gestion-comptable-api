import { Request, Response } from 'express';
import { UpdateClientUseCase } from './UpdateClientUseCase';

export class UpdateClientController {
    constructor(
        private updateClientUseCase: UpdateClientUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { nom_client, adresse, rc, if: ifValue, nif, nis, code_tiers } = request.body;

        try {
            const data = await this.updateClientUseCase.execute(id, {
                nom_client,
                adresse,
                rc,
                if: ifValue,
                nif,
                nis,
                code_tiers,
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}