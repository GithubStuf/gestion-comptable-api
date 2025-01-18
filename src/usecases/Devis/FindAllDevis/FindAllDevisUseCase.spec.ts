import { FindAllDevisUseCase } from "./FindAllDevisUseCase";
import { CreateDevisUseCase } from "../CreateDevis/CreateDevisUseCase";
import { InMemoryDevisRepository } from "../../../repositories/implementations/in-memory";
import { createDevisMock } from "../../../mocks";

describe("Find All Devis usecase", () => {
    let inMemoryDevisRepository: InMemoryDevisRepository;
    let createDevisUseCase: CreateDevisUseCase;
    let findAllDevisUseCase: FindAllDevisUseCase;

    beforeAll(() => {
        inMemoryDevisRepository = new InMemoryDevisRepository();
        createDevisUseCase = new CreateDevisUseCase(inMemoryDevisRepository);
        findAllDevisUseCase = new FindAllDevisUseCase(inMemoryDevisRepository);
    });

    it("Should be able to list all devis", async () => {
        await createDevisUseCase.execute(createDevisMock);

        const result = await findAllDevisUseCase.execute(1, 10);

        expect(result.devis).toHaveLength(1);
        expect(result.total).toBe(1);
        expect(result.page).toBe(1);
        expect(result.perPage).toBe(10);
    });
});