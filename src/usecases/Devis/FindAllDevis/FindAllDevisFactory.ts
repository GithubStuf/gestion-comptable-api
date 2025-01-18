import { PrismaDevisRepository } from "../../../repositories/implementations/prisma";
import { FindAllDevisController } from "./FindAllDevisController";
import { FindAllDevisUseCase } from "./FindAllDevisUseCase";

export const findAllDevisFactory = () => {
    const prismaDevisRepository = new PrismaDevisRepository();
    const findAllDevisUseCase = new FindAllDevisUseCase(prismaDevisRepository);
    const findAllDevisController = new FindAllDevisController(findAllDevisUseCase);

    return findAllDevisController;
};