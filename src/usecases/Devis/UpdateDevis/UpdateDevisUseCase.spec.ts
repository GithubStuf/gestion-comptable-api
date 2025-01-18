import { UpdateDevisUseCase } from "./UpdateDevisUseCase";
import { CreateDevisUseCase } from "../CreateDevis/CreateDevisUseCase";
import { InMemoryDevisRepository } from "../../../repositories/implementations/in-memory";
import { IDevis } from "../../../dtos/Devis";
import { createDevisMock, updateDevisMock } from "../../../mocks";

describe("Update Devis usecase", () => {
    let inMemoryDevisRepository: InMemoryDevisRepository;
    let createDevisUseCase: CreateDevisUseCase;
    let updateDevisUseCase: UpdateDevisUseCase;

    beforeAll(() => {
        inMemoryDevisRepository = new InMemoryDevisRepository();
        createDevisUseCase = new CreateDevisUseCase(inMemoryDevisRepository);
        updateDevisUseCase = new UpdateDevisUseCase(inMemoryDevisRepository);
    });

    it("Should be able to create and update a devis", async () => {
        const response = await createDevisUseCase.execute(createDevisMock);

        const { id } = (response as IDevis);
        await expect(updateDevisUseCase.execute(id, updateDevisMock))
            .resolves
            .not
            .toThrow();

        expect(inMemoryDevisRepository.devis).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    num_devis: "DEV67890",
                }),
            ]),
        );
    });
});