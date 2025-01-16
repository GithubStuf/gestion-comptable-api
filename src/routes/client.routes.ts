import { Router } from "express";
import { createClientFactory } from "../usecases/Client/CreateClient/CreateClientFactory";
import { findAllClientsFactory } from "../usecases/Client/FindAllClients/FindAllClientsFactory";
import { findByIdClientFactory } from "../usecases/Client/FindByIdClient/FindByIdClientFactory";
import { updateClientFactory } from "../usecases/Client/UpdateClient/UpdateClientFactory";
import { deleteClientFactory } from "../usecases/Client/DeleteClient/DeleteClientFactory";

const clientRoutes = Router();

clientRoutes.route("/")
    .post((request, response) => {
        return createClientFactory().handle(request, response);
    })
    .get((request, response) => {
        return findAllClientsFactory().handle(request, response);
    });

clientRoutes.route("/:id")
    .get((request, response) => {
        return findByIdClientFactory().handle(request, response);
    })
    .put((request, response) => {
        return updateClientFactory().handle(request, response);
    })
    .delete((request, response) => {
        return deleteClientFactory().handle(request, response);
    });

export { clientRoutes };