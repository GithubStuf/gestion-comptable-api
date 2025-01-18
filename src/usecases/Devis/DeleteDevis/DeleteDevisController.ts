import { Request, Response } from 'express';
import { DeleteDevisUseCase } from './DeleteDevisUseCase';

export class DeleteDevisController {
    constructor(
        private deleteDevisUseCase: DeleteDevisUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteDevisUseCase.execute(id);
            return response.status(204).send();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}