import { IClientRepository } from "../../../repositories";
import { IFindAllClientsRequest, IFindAllClientsResponse } from "./FindAllClientsDTO";

export class FindAllClientsUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute({ page, perPage }: IFindAllClientsRequest): Promise<IFindAllClientsResponse> {
        const result = await this.clientRepository.findAll(page, perPage);
        return result;
    }
}