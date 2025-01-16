import { Request, Response } from 'express';
import { DeleteMarcheUseCase } from './DeleteMarcheUseCase';

export class DeleteMarcheController {
    constructor(
        private deleteMarcheUseCase: DeleteMarcheUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteMarcheUseCase.execute(id);
            return response.status(204).send();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}