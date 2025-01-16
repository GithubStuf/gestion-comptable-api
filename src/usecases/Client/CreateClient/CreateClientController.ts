import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';
import { ICreateClientRequest } from './CreateClientDTO';

export class CreateClientController {
    constructor(
        private createClientUseCase: CreateClientUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nom_client, adresse, rc, if: ifValue, nif, nis, code_tiers } = request.body;

        try {
            const data: ICreateClientRequest = {
                nom_client,
                adresse,
                rc,
                if: ifValue,
                nif,
                nis,
                code_tiers,
            };

            const result = await this.createClientUseCase.execute(data);

            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}