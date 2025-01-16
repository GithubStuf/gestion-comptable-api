import { PrismaMarcheRepository } from "../../../repositories/implementations/prisma";
import { FindMarcheByIdController } from "./FindMarcheByIdController";
import { FindMarcheByIdUseCase } from "./FindMarcheByIdUseCase";

export const findMarcheByIdFactory = () => {
    const prismaMarcheRepository = new PrismaMarcheRepository();
    const findMarcheByIdUseCase = new FindMarcheByIdUseCase(prismaMarcheRepository);
    const findMarcheByIdController = new FindMarcheByIdController(findMarcheByIdUseCase);

    return findMarcheByIdController;
};