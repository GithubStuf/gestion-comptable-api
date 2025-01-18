import { IDevisRepository } from "../../../repositories";
import { IFindAllDevisResponse } from "./FindAllDevisDTO";

export class FindAllDevisUseCase {
    constructor(
        private devisRepository: IDevisRepository
    ) { }

    async execute(page: number, perPage: number): Promise<IFindAllDevisResponse> {
        const result = await this.devisRepository.findAll(page, perPage);
        return {
            devis: result.data,
            total: result.totalItems,
            page: result.paginator.currentPage,
            perPage: result.paginator.perPage,
        };
    }
}