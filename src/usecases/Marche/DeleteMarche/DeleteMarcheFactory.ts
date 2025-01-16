import { PrismaMarcheRepository } from "../../../repositories/implementations/prisma";
import { DeleteMarcheController } from "./DeleteMarcheController";
import { DeleteMarcheUseCase } from "./DeleteMarcheUseCase";

export const deleteMarcheFactory = () => {
    const prismaMarcheRepository = new PrismaMarcheRepository();
    const deleteMarcheUseCase = new DeleteMarcheUseCase(prismaMarcheRepository);
    const deleteMarcheController = new DeleteMarcheController(deleteMarcheUseCase);

    return deleteMarcheController;
};