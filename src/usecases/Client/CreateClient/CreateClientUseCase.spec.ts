import { CreateClientUseCase } from "./CreateClientUseCase";
import { InMemoryClientRepository } from "../../../repositories/implementations/in-memory";
import { createClientMock } from "../../../mocks";

describe("Create Client usecase", () => {
    let inMemoryClientRepository: InMemoryClientRepository;
    let createClientUseCase: CreateClientUseCase;

    beforeAll(() => {
        inMemoryClientRepository = new InMemoryClientRepository();
        createClientUseCase = new CreateClientUseCase(inMemoryClientRepository);
    });

    it("Should be able to create a new client", async () => {
        const clientData = createClientMock;

        await expect(createClientUseCase.execute(clientData))
            .resolves
            .not
            .toThrow();

        expect(inMemoryClientRepository.clients).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nom_client: "Client 1",
                }),
            ]),
        );
    });

    it("Should not be able to create a client with missing required fields", async () => {
        const clientData = { ...createClientMock, nom_client: "" };

        await expect(createClientUseCase.execute(clientData))
            .rejects
            .toThrow("Missing required fields.");
    });
});