import { IClientRepository } from "../../../repositories";

export class DeleteClientUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute(id: string): Promise<void | Error> {
        const clientExists = await this.clientRepository.findById(id);

        if (!clientExists) {
            throw new Error("Client does not exist.");
        }

        await this.clientRepository.delete(id);
    }
}