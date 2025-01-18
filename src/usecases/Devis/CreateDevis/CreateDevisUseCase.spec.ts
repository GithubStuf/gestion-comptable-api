import { CreateDevisUseCase } from "./CreateDevisUseCase";
import { InMemoryDevisRepository } from "../../../repositories/implementations/in-memory";
import { createDevisMock } from "../../../mocks";

describe("Create Devis usecase", () => {
    let inMemoryDevisRepository: InMemoryDevisRepository;
    let createDevisUseCase: CreateDevisUseCase;

    beforeAll(() => {
        inMemoryDevisRepository = new InMemoryDevisRepository();
        createDevisUseCase = new CreateDevisUseCase(inMemoryDevisRepository);
    });

    it("Should be able to create a new devis", async () => {
        const devisData = createDevisMock;

        await expect(createDevisUseCase.execute(devisData))
            .resolves
            .not
            .toThrow();

        expect(inMemoryDevisRepository.devis).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    num_devis: "DEV12345",
                }),
            ]),
        );
    });

    it("Should not be able to create a devis with missing required fields", async () => {
        const devisData = { ...createDevisMock, num_devis: "" };

        await expect(createDevisUseCase.execute(devisData))
            .rejects
            .toThrow("Missing required fields.");
    });
});