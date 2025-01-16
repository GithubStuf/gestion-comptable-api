import { DeleteMarcheUseCase } from "./DeleteMarcheUseCase";
import { CreateMarcheUseCase } from "../CreateMarche/CreateMarcheUseCase";
import { InMemoryMarcheRepository } from "../../../repositories/implementations/in-memory";
import { createMarcheMock } from "../../../mocks";

describe("Delete Marche usecase", () => {
    let inMemoryMarcheRepository: InMemoryMarcheRepository;
    let createMarcheUseCase: CreateMarcheUseCase;
    let deleteMarcheUseCase: DeleteMarcheUseCase;

    beforeAll(() => {
        inMemoryMarcheRepository = new InMemoryMarcheRepository();
        createMarcheUseCase = new CreateMarcheUseCase(inMemoryMarcheRepository);
        deleteMarcheUseCase = new DeleteMarcheUseCase(inMemoryMarcheRepository);
    });

    it("Should be able to delete a marche", async () => {
        const response = await createMarcheUseCase.execute(createMarcheMock);
        const { id } = response as { id: string };

        await expect(deleteMarcheUseCase.execute(id))
            .resolves
            .not
            .toThrow();

        expect(inMemoryMarcheRepository.marches).toHaveLength(0);
    });

    it("Should not be able to delete a non-existent marche", async () => {
        await expect(deleteMarcheUseCase.execute("invalid-id"))
            .rejects
            .toThrow("Marche does not exist.");
    });
});