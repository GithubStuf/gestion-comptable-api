import { Request, Response } from 'express';
import { FindMarcheByIdUseCase } from './FindMarcheByIdUseCase';

export class FindMarcheByIdController {
    constructor(
        private findMarcheByIdUseCase: FindMarcheByIdUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const marche = await this.findMarcheByIdUseCase.execute(id);

            if (!marche) {
                return response.status(404).json({ message: "Marche not found." });
            }

            return response.status(200).json(marche);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}