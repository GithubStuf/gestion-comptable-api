import { Request, Response } from 'express';
import { CreateMarcheUseCase } from './CreateMarcheUseCase';
import { ICreateMarcheRequest } from './CreateMarcheDTO';

export class CreateMarcheController {
    constructor(
        private createMarcheUseCase: CreateMarcheUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nom_marche, type_marche, id_client, statut } = request.body;

        try {
            const data: ICreateMarcheRequest = {
                nom_marche,
                type_marche,
                id_client,
                statut,
            };

            const result = await this.createMarcheUseCase.execute(data);

            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}