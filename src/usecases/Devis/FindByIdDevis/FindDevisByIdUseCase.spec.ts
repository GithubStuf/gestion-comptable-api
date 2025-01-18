import { FindDevisByIdUseCase } from "./FindDevisByIdUseCase";
import { CreateDevisUseCase } from "../CreateDevis/CreateDevisUseCase";
import { InMemoryDevisRepository } from "../../../repositories/implementations/in-memory";
import { createDevisMock } from "../../../mocks";

describe("Find Devis by ID usecase", () => {
    let inMemoryDevisRepository: InMemoryDevisRepository;
    let createDevisUseCase: CreateDevisUseCase;
    let findDevisByIdUseCase: FindDevisByIdUseCase;

    beforeAll(() => {
        inMemoryDevisRepository = new InMemoryDevisRepository();
        createDevisUseCase = new CreateDevisUseCase(inMemoryDevisRepository);
        findDevisByIdUseCase = new FindDevisByIdUseCase(inMemoryDevisRepository);
    });

    it("Should be able to find a devis by ID", async () => {
        const response = await createDevisUseCase.execute(createDevisMock);
        const { id } = response as { id: string };

        const devis = await findDevisByIdUseCase.execute(id);

        expect(devis).toHaveProperty("id", id);
        expect(devis).toHaveProperty("num_devis", "DEV12345");
    });

    it("Should return null if devis is not found", async () => {
        const devis = await findDevisByIdUseCase.execute("invalid-id");
        expect(devis).toBeNull();
    });
});