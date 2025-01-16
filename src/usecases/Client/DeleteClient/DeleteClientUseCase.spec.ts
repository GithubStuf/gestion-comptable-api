import { InMemoryClientRepository } from "../../../repositories/implementations/in-memory";
import { CreateClientUseCase } from "../CreateClient/CreateClientUseCase";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { IClient } from "../../../dtos/Client";
import { createClientMock } from "../../../mocks";

describe("Delete Client usecase", () => {
    let inMemoryClientRepository: InMemoryClientRepository;
    let createClientUseCase: CreateClientUseCase;
    let deleteClientUseCase: DeleteClientUseCase;

    beforeEach(() => {
        inMemoryClientRepository = new InMemoryClientRepository();
        createClientUseCase = new CreateClientUseCase(inMemoryClientRepository);
        deleteClientUseCase = new DeleteClientUseCase(inMemoryClientRepository);
    });

    it("Should be able to delete a client", async () => {
        // Create a client first
        const result = await createClientUseCase.execute(createClientMock);

        expect(inMemoryClientRepository.clients).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nom_client: "Client 1",
                }),
            ]),
        );

        // Delete the client
        const id = (result as IClient).id;
        await expect(deleteClientUseCase.execute(id)).resolves.not.toThrow();

        // Verify the client is deleted
        expect(inMemoryClientRepository.clients).toEqual(
            expect.not.arrayContaining([
                expect.objectContaining({
                    nom_client: "Client 1",
                }),
            ]),
        );
    });

    it("Should throw an error if client is not found", async () => {
        await expect(deleteClientUseCase.execute("invalid-id"))
            .rejects
            .toThrow("Client does not exist.");
    });
});