import { IDevisRepository } from "../../../repositories";

export class DeleteDevisUseCase {
    constructor(
        private devisRepository: IDevisRepository
    ) { }

    async execute(id: string): Promise<void | Error> {
        const devisExists = await this.devisRepository.findById(id);

        if (!devisExists) {
            throw new Error("Devis does not exist.");
        }

        await this.devisRepository.delete(id);
    }
}