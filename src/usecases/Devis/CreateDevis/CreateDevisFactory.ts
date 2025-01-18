import { PrismaDevisRepository } from "../../../repositories/implementations/prisma";
import { CreateDevisController } from "./CreateDevisController";
import { CreateDevisUseCase } from "./CreateDevisUseCase";

export const createDevisFactory = () => {
    const prismaDevisRepository = new PrismaDevisRepository();
    const createDevisUseCase = new CreateDevisUseCase(prismaDevisRepository);
    const createDevisController = new CreateDevisController(createDevisUseCase);

    return createDevisController;
};