import { IDevisRepository } from "../../../repositories";
import { IUpdateDevis, IUpdateDevisRequest } from "./UpdateDevisDTO";

export class UpdateDevisUseCase {
    constructor(
        private devisRepository: IDevisRepository
    ) { }

    async execute(id: string, data: IUpdateDevisRequest): Promise<IUpdateDevis | Error> {
        const devisExists = await this.devisRepository.findById(id);

        if (!devisExists) {
            throw new Error("Devis does not exist.");
        }

        const result = await this.devisRepository.update(id, data);
        return result;
    }
}