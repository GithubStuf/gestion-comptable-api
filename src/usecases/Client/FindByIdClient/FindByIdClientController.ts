import { Request, Response } from 'express';
import { FindByIdClientUseCase } from './FindByIdClientUseCase';
import { IFindByIdClientRequest } from './FindByIdClientDTO';

export class FindByIdClientController {
  constructor(
    private findByIdClientUseCase: FindByIdClientUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const requestData: IFindByIdClientRequest = { id };
      const result = await this.findByIdClientUseCase.execute(requestData);

      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.',
      });
    }
  }
}