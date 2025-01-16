import { Request, Response } from 'express';
import { FindAllClientsUseCase } from './FindAllClientsUseCase';
import { IFindAllClientsRequest } from './FindAllClientsDTO';

export class FindAllClientsController {
    constructor(
        private findAllClientsUseCase: FindAllClientsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { page = 1, perPage = 10 } = request.query;

        const findAllClientsRequest: IFindAllClientsRequest = {
            page: Number(page),
            perPage: Number(perPage),
        };

        try {
            const result = await this.findAllClientsUseCase.execute(findAllClientsRequest);

            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.',
            });
        }
    }
}