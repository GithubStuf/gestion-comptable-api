import { Request, Response } from 'express';
import { FindDevisByIdUseCase } from './FindDevisByIdUseCase';

export class FindDevisByIdController {
    constructor(
        private findDevisByIdUseCase: FindDevisByIdUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const devis = await this.findDevisByIdUseCase.execute(id);

            if (!devis) {
                return response.status(404).json({ message: "Devis not found." });
            }

            return response.status(200).json(devis);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}