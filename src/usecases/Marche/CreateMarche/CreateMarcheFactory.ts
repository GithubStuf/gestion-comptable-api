import { PrismaMarcheRepository } from "../../../repositories/implementations/prisma";
import { CreateMarcheController } from "./CreateMarcheController";
import { CreateMarcheUseCase } from "./CreateMarcheUseCase";

export const createMarcheFactory = () => {
    const prismaMarcheRepository = new PrismaMarcheRepository();
    const createMarcheUseCase = new CreateMarcheUseCase(prismaMarcheRepository);
    const createMarcheController = new CreateMarcheController(createMarcheUseCase);

    return createMarcheController;
};