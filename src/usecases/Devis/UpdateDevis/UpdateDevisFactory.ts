import { PrismaDevisRepository } from "../../../repositories/implementations/prisma";
import { UpdateDevisController } from "./UpdateDevisController";
import { UpdateDevisUseCase } from "./UpdateDevisUseCase";

export const updateDevisFactory = () => {
    const prismaDevisRepository = new PrismaDevisRepository();
    const updateDevisUseCase = new UpdateDevisUseCase(prismaDevisRepository);
    const updateDevisController = new UpdateDevisController(updateDevisUseCase);

    return updateDevisController;
};