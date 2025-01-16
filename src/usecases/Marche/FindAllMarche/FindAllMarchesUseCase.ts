import { IMarcheRepository } from "../../../repositories";
import { IFindAllMarchesResponse } from "./FindAllMarchesDTO";

export class FindAllMarchesUseCase {
    constructor(
        private marcheRepository: IMarcheRepository
    ) { }

    async execute(page: number, perPage: number): Promise<IFindAllMarchesResponse> {
        const result = await this.marcheRepository.findAll(page, perPage);
        return {
            marches: result.data,
            total: result.totalItems,
            page: result.paginator.pages,
            perPage: result.paginator.prevPage,
        };
    }
}