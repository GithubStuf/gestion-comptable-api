import { DeleteDevisUseCase } from "./DeleteDevisUseCase";
import { CreateDevisUseCase } from "../CreateDevis/CreateDevisUseCase";
import { InMemoryDevisRepository } from "../../../repositories/implementations/in-memory";
import { createDevisMock } from "../../../mocks";

describe("Delete Devis usecase", () => {
    let inMemoryDevisRepository: InMemoryDevisRepository;
    let createDevisUseCase: CreateDevisUseCase;
    let deleteDevisUseCase: DeleteDevisUseCase;

    beforeAll(() => {
        inMemoryDevisRepository = new InMemoryDevisRepository();
        createDevisUseCase = new CreateDevisUseCase(inMemoryDevisRepository);
        deleteDevisUseCase = new DeleteDevisUseCase(inMemoryDevisRepository);
    });

    it("Should be able to delete a devis", async () => {
        const response = await createDevisUseCase.execute(createDevisMock);
        const { id } = response as { id: string };

        await expect(deleteDevisUseCase.execute(id))
            .resolves
            .not
            .toThrow();

        expect(inMemoryDevisRepository.devis).toHaveLength(0);
    });

    it("Should not be able to delete a non-existent devis", async () => {
        await expect(deleteDevisUseCase.execute("invalid-id"))
            .rejects
            .toThrow("Devis does not exist.");
    });
});