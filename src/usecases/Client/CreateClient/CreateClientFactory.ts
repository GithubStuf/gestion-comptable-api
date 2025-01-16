import { PrismaClientRepository } from "../../../repositories/implementations/prisma";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

export const createClientFactory = () => {
    const prismaClientRepository = new PrismaClientRepository();
    const createClientUseCase = new CreateClientUseCase(prismaClientRepository);
    const createClientController = new CreateClientController(createClientUseCase);

    return createClientController;
};