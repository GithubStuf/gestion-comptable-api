import { IMarcheRepository } from "../../../repositories";

export class DeleteMarcheUseCase {
    constructor(
        private marcheRepository: IMarcheRepository
    ) { }

    async execute(id: string): Promise<void | Error> {
        const marcheExists = await this.marcheRepository.findById(id);

        if (!marcheExists) {
            throw new Error("Marche does not exist.");
        }

        await this.marcheRepository.delete(id);
    }
}