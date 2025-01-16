import { IClientRepository } from "../../../repositories";
import { IFindByIdClientRequest, IFindByIdClientResponse } from "./FindByIdClientDTO";

export class FindByIdClientUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute({ id }: IFindByIdClientRequest): Promise<IFindByIdClientResponse> {
        const client = await this.clientRepository.findById(id);
        return { data: client };
    }
}