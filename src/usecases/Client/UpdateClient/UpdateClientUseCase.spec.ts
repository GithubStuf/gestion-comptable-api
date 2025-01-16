import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { CreateClientUseCase } from "../CreateClient/CreateClientUseCase";
import { InMemoryClientRepository } from "../../../repositories/implementations/in-memory";
import { IClient } from "../../../dtos/Client";
import { createClientMock, updateClientMock } from "../../../mocks";

describe("Update Client usecase", () => {
    let inMemoryClientRepository: InMemoryClientRepository;
    let createClientUseCase: CreateClientUseCase;
    let updateClientUseCase: UpdateClientUseCase;

    beforeAll(() => {
        inMemoryClientRepository = new InMemoryClientRepository();
        createClientUseCase = new CreateClientUseCase(inMemoryClientRepository);
        updateClientUseCase = new UpdateClientUseCase(inMemoryClientRepository);
    });

    it("Should be able to create and update a client", async () => {
        const response = await createClientUseCase.execute(createClientMock);

        const { id } = (response as IClient);
        await expect(updateClientUseCase.execute(id, updateClientMock))
            .resolves
            .not
            .toThrow();

        expect(inMemoryClientRepository.clients).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nom_client: "Updated Client 1",
                }),
            ]),
        );
    });
});