import { PrismaMarcheRepository } from "../../../repositories/implementations/prisma";
import { UpdateMarcheController } from "./UpdateMarcheController";
import { UpdateMarcheUseCase } from "./UpdateMarcheUseCase";

export const updateMarcheFactory = () => {
    const prismaMarcheRepository = new PrismaMarcheRepository();
    const updateMarcheUseCase = new UpdateMarcheUseCase(prismaMarcheRepository);
    const updateMarcheController = new UpdateMarcheController(updateMarcheUseCase);

    return updateMarcheController;
};