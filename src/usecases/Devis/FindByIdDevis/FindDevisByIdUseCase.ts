import { IDevisRepository } from "../../../repositories";
import { IFindDevisByIdResponse } from "./FindDevisByIdDTO";

export class FindDevisByIdUseCase {
    constructor(
        private devisRepository: IDevisRepository
    ) { }

    async execute(id: string): Promise<IFindDevisByIdResponse | null> {
        const devis = await this.devisRepository.findById(id);
        return devis;
    }
}