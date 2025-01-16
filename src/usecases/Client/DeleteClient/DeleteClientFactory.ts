import { PrismaClientRepository } from "../../../repositories/implementations/prisma";
import { DeleteClientController } from "./DeleteClientController";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export const deleteClientFactory = () => {
    const prismaClientRepository = new PrismaClientRepository();
    const deleteClientUseCase = new DeleteClientUseCase(prismaClientRepository);
    const deleteClientController = new DeleteClientController(deleteClientUseCase);

    return deleteClientController;
};