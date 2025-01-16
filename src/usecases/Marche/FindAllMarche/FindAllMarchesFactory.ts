import { PrismaMarcheRepository } from "../../../repositories/implementations/prisma";
import { FindAllMarchesController } from "./FindAllMarchesController";
import { FindAllMarchesUseCase } from "./FindAllMarchesUseCase";

export const findAllMarchesFactory = () => {
    const prismaMarcheRepository = new PrismaMarcheRepository();
    const findAllMarchesUseCase = new FindAllMarchesUseCase(prismaMarcheRepository);
    const findAllMarchesController = new FindAllMarchesController(findAllMarchesUseCase);

    return findAllMarchesController;
};