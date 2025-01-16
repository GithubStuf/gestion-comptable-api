import { PrismaClientRepository } from "../../../repositories/implementations/prisma";
import { FindByIdClientController } from "./FindByIdClientController";
import { FindByIdClientUseCase } from "./FindByIdClientUseCase";

export const findByIdClientFactory = () => {
  const prismaClientRepository = new PrismaClientRepository();
  const findByIdClientUseCase = new FindByIdClientUseCase(prismaClientRepository);
  const findByIdClientController = new FindByIdClientController(findByIdClientUseCase);

  return findByIdClientController;
};