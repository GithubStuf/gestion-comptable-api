import { PrismaClientRepository } from "../../../repositories/implementations/prisma";
import { UpdateClientController } from "./UpdateClientController";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export const updateClientFactory = () => {
    const prismaClientRepository = new PrismaClientRepository();
    const updateClientUseCase = new UpdateClientUseCase(prismaClientRepository);
    const updateClientController = new UpdateClientController(updateClientUseCase);

    return updateClientController;
};