import { FindAllClientsUseCase } from "./FindAllClientsUseCase";
import { InMemoryClientRepository } from "../../../repositories/implementations/in-memory";

describe("FindAllClients usecase", () => {
    let inMemoryClientRepository: InMemoryClientRepository;
    let findAllClientsUseCase: FindAllClientsUseCase;

    beforeAll(() => {
        inMemoryClientRepository = new InMemoryClientRepository();
        findAllClientsUseCase = new FindAllClientsUseCase(inMemoryClientRepository);
    });

    it("Should be able to find all clients", async () => {
        const result = await findAllClientsUseCase.execute({ page: 1, perPage: 10 });

        expect(result.data).toBeInstanceOf(Array);
        expect(result.paginator.totalResults).toBeGreaterThanOrEqual(0);
    });
});