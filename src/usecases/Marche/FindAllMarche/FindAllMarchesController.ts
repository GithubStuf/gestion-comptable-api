import { Request, Response } from 'express';
import { FindAllMarchesUseCase } from './FindAllMarchesUseCase';

export class FindAllMarchesController {
    constructor(
        private findAllMarchesUseCase: FindAllMarchesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { page = 1, perPage = 10 } = request.query;

        try {
            const result = await this.findAllMarchesUseCase.execute(
                Number(page),
                Number(perPage)
            );

            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}