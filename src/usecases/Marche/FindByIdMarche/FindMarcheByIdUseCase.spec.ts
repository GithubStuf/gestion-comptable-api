import { FindMarcheByIdUseCase } from "./FindMarcheByIdUseCase";
import { CreateMarcheUseCase } from "../CreateMarche/CreateMarcheUseCase";
import { InMemoryMarcheRepository } from "../../../repositories/implementations/in-memory";
import { createMarcheMock } from "../../../mocks";

describe("Find Marche by ID usecase", () => {
    let inMemoryMarcheRepository: InMemoryMarcheRepository;
    let createMarcheUseCase: CreateMarcheUseCase;
    let findMarcheByIdUseCase: FindMarcheByIdUseCase;

    beforeAll(() => {
        inMemoryMarcheRepository = new InMemoryMarcheRepository();
        createMarcheUseCase = new CreateMarcheUseCase(inMemoryMarcheRepository);
        findMarcheByIdUseCase = new FindMarcheByIdUseCase(inMemoryMarcheRepository);
    });

    it("Should be able to find a marche by ID", async () => {
        const response = await createMarcheUseCase.execute(createMarcheMock);
        const { id } = response as { id: string };

        const marche = await findMarcheByIdUseCase.execute(id);

        expect(marche).toHaveProperty("id", id);
        expect(marche).toHaveProperty("nom_marche", "Marché 1");
    });

    it("Should return null if marche is not found", async () => {
        const marche = await findMarcheByIdUseCase.execute("invalid-id");
        expect(marche).toBeNull();
    });
});