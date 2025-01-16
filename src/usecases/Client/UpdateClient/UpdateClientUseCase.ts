import { IClientRepository } from "../../../repositories";
import { IClient, IUpdateClientRequest } from "./UpdateClientDTO";

export class UpdateClientUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute(id: string, data: IUpdateClientRequest): Promise<IClient | Error> {
        const clientExists = await this.clientRepository.findById(id);

        if (!clientExists) {
            throw new Error("Client does not exist.");
        }

        const result = await this.clientRepository.update(id, data);
        return result;
    }
}