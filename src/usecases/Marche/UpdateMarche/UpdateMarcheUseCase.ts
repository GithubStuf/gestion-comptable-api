import { IMarcheRepository } from "../../../repositories";
import { IUpdateMarche, IUpdateMarcheRequest } from "./UpdateMarcheDTO";

export class UpdateMarcheUseCase {
    constructor(
        private marcheRepository: IMarcheRepository
    ) { }

    async execute(id: string, data: IUpdateMarcheRequest): Promise<IUpdateMarche | Error> {
        const marcheExists = await this.marcheRepository.findById(id);

        if (!marcheExists) {
            throw new Error("Marche does not exist.");
        }

        const result = await this.marcheRepository.update(id, data);
        return result;
    }
}