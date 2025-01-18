import { PrismaDevisRepository } from "../../../repositories/implementations/prisma";
import { DeleteDevisController } from "./DeleteDevisController";
import { DeleteDevisUseCase } from "./DeleteDevisUseCase";

export const deleteDevisFactory = () => {
    const prismaDevisRepository = new PrismaDevisRepository();
    const deleteDevisUseCase = new DeleteDevisUseCase(prismaDevisRepository);
    const deleteDevisController = new DeleteDevisController(deleteDevisUseCase);

    return deleteDevisController;
};