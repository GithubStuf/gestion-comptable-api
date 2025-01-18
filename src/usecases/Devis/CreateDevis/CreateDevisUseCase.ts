import { IDevisRepository } from "../../../repositories";
import { ICreateDevis, ICreateDevisRequest } from "./CreateDevisDTO";

export class CreateDevisUseCase {
    constructor(
        private devisRepository: IDevisRepository
    ) { }

    async execute(data: ICreateDevisRequest): Promise<ICreateDevis | Error> {
        const result = await this.devisRepository.create(data);
        return result;
    }
}