import { IMarcheRepository } from "../../../repositories";
import { IFindMarcheByIdResponse } from "./FindMarcheByIdDTO";

export class FindMarcheByIdUseCase {
    constructor(
        private marcheRepository: IMarcheRepository
    ) { }

    async execute(id: string): Promise<IFindMarcheByIdResponse | null> {
        const marche = await this.marcheRepository.findById(id);
        return marche;
    }
}