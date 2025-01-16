import { UpdateMarcheUseCase } from "./UpdateMarcheUseCase";
import { CreateMarcheUseCase } from "../CreateMarche/CreateMarcheUseCase";
import { InMemoryMarcheRepository } from "../../../repositories/implementations/in-memory";
import { IMarche } from "../../../dtos/Marche";
import { createMarcheMock, updateMarcheMock } from "../../../mocks";

describe("Update Marche usecase", () => {
    let inMemoryMarcheRepository: InMemoryMarcheRepository;
    let createMarcheUseCase: CreateMarcheUseCase;
    let updateMarcheUseCase: UpdateMarcheUseCase;

    beforeAll(() => {
        inMemoryMarcheRepository = new InMemoryMarcheRepository();
        createMarcheUseCase = new CreateMarcheUseCase(inMemoryMarcheRepository);
        updateMarcheUseCase = new UpdateMarcheUseCase(inMemoryMarcheRepository);
    });

    it("Should be able to create and update a marche", async () => {
        const response = await createMarcheUseCase.execute(createMarcheMock);

        const { id } = (response as IMarche);
        await expect(updateMarcheUseCase.execute(id, updateMarcheMock))
            .resolves
            .not
            .toThrow();

        expect(inMemoryMarcheRepository.marches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nom_marche: "Updated Marché 1",
                }),
            ]),
        );
    });
});