import { PrismaDevisRepository } from "../../../repositories/implementations/prisma";
import { FindDevisByIdController } from "./FindDevisByIdController";
import { FindDevisByIdUseCase } from "./FindDevisByIdUseCase";

export const findDevisByIdFactory = () => {
    const prismaDevisRepository = new PrismaDevisRepository();
    const findDevisByIdUseCase = new FindDevisByIdUseCase(prismaDevisRepository);
    const findDevisByIdController = new FindDevisByIdController(findDevisByIdUseCase);

    return findDevisByIdController;
};