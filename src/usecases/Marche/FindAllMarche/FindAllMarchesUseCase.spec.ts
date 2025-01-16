import { FindAllMarchesUseCase } from "./FindAllMarchesUseCase";
import { CreateMarcheUseCase } from "../CreateMarche/CreateMarcheUseCase";
import { InMemoryMarcheRepository } from "../../../repositories/implementations/in-memory";
import { createMarcheMock } from "../../../mocks";

describe("Find All Marches usecase", () => {
    let inMemoryMarcheRepository: InMemoryMarcheRepository;
    let createMarcheUseCase: CreateMarcheUseCase;
    let findAllMarchesUseCase: FindAllMarchesUseCase;

    beforeAll(() => {
        inMemoryMarcheRepository = new InMemoryMarcheRepository();
        createMarcheUseCase = new CreateMarcheUseCase(inMemoryMarcheRepository);
        findAllMarchesUseCase = new FindAllMarchesUseCase(inMemoryMarcheRepository);
    });

    it("Should be able to list all marches", async () => {
        await createMarcheUseCase.execute(createMarcheMock);

        const result = await findAllMarchesUseCase.execute(1, 10);

        expect(result.marches).toHaveLength(1);
        expect(result.total).toBe(1);
        expect(result.page).toBe(1);
        expect(result.perPage).toBe(10);
    });
});