import { FindByIdClientUseCase } from "./FindByIdClientUseCase";
import { InMemoryClientRepository } from "../../../repositories/implementations/in-memory";
import { CreateClientUseCase } from "../CreateClient/CreateClientUseCase";
import { IClient } from "../../../dtos/Client";
import { createClientMock } from "../../../mocks";

describe("FindByIdClient usecase", () => {
  let inMemoryClientRepository: InMemoryClientRepository;
  let findByIdClientUseCase: FindByIdClientUseCase;
  let createClientUseCase: CreateClientUseCase;

  beforeAll(() => {
    inMemoryClientRepository = new InMemoryClientRepository();
    findByIdClientUseCase = new FindByIdClientUseCase(inMemoryClientRepository);
    createClientUseCase = new CreateClientUseCase(inMemoryClientRepository);
  });

  it("Should be able to find a client by ID", async () => {
    // Create a client first
    const result = await createClientUseCase.execute(createClientMock);
    const id = (result as IClient).id;

    // Find the client by ID
    await expect(findByIdClientUseCase.execute({ id }))
      .resolves
      .not
      .toThrow();
  });

  it("Should return null if client is not found", async () => {
    // Try to find a client with an invalid ID
    const result = await findByIdClientUseCase.execute({ id: "invalid-id" });

    expect(result.data).toBeNull();
  });
});