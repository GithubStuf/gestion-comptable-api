import { PrismaClientRepository } from "../../../repositories/implementations/prisma";
import { FindAllClientsController } from "./FindAllClientsController";
import { FindAllClientsUseCase } from "./FindAllClientsUseCase";

export const findAllClientsFactory = () => {
    const prismaClientRepository = new PrismaClientRepository();
    const findAllClientsUseCase = new FindAllClientsUseCase(prismaClientRepository);
    const findAllClientsController = new FindAllClientsController(findAllClientsUseCase);

    return findAllClientsController;
};