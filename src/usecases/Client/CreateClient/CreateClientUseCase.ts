import { IClientRepository } from "../../../repositories";
import { ICreateClient, ICreateClientRequest } from "./CreateClientDTO";

export class CreateClientUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute(data: ICreateClientRequest): Promise<ICreateClient | Error> {
        const result = await this.clientRepository.create(data);
        return result;
    }
}