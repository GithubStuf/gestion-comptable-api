import { CreateMarcheUseCase } from "./CreateMarcheUseCase";
import { InMemoryMarcheRepository } from "../../../repositories/implementations/in-memory";
import { createMarcheMock } from "../../../mocks";

describe("Create Marche usecase", () => {
    let inMemoryMarcheRepository: InMemoryMarcheRepository;
    let createMarcheUseCase: CreateMarcheUseCase;

    beforeAll(() => {
        inMemoryMarcheRepository = new InMemoryMarcheRepository();
        createMarcheUseCase = new CreateMarcheUseCase(inMemoryMarcheRepository);
    });

    it("Should be able to create a new marche", async () => {
        const marcheData = createMarcheMock;

        await expect(createMarcheUseCase.execute(marcheData))
            .resolves
            .not
            .toThrow();

        expect(inMemoryMarcheRepository.marches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nom_marche: "Marché 1",
                }),
            ]),
        );
    });

    it("Should not be able to create a marche with missing required fields", async () => {
        const marcheData = { ...createMarcheMock, nom_marche: "" };

        await expect(createMarcheUseCase.execute(marcheData))
            .rejects
            .toThrow("Missing required fields.");
    });
});