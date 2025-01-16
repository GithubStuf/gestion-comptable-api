import { IMarcheRepository } from "../../../repositories";
import { ICreateMarche, ICreateMarcheRequest } from "./CreateMarcheDTO";

export class CreateMarcheUseCase {
    constructor(
        private marcheRepository: IMarcheRepository
    ) { }

    async execute(data: ICreateMarcheRequest): Promise<ICreateMarche | Error> {
        const result = await this.marcheRepository.create(data);
        return result;
    }
}