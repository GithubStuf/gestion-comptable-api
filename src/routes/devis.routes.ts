import { Router } from "express";
import { createDevisFactory } from "../usecases/Devis/CreateDevis/CreateDevisFactory";
import { findAllDevisFactory } from "../usecases/Devis/FindAllDevis/FindAllDevisFactory";
import { findDevisByIdFactory } from "../usecases/Devis/FindByIdDevis/FindDevisByIdFactory";
import { updateDevisFactory } from "../usecases/Devis/UpdateDevis/UpdateDevisFactory";
import { deleteDevisFactory } from "../usecases/Devis/DeleteDevis/DeleteDevisFactory";

const devisRoutes = Router();

devisRoutes.route("/")
    .post((request, response) => {
        return createDevisFactory().handle(request, response);
    })
    .get((request, response) => {
        return findAllDevisFactory().handle(request, response);
    });

devisRoutes.route("/:id")
    .get((request, response) => {
        return findDevisByIdFactory().handle(request, response);
    })
    .put((request, response) => {
        return updateDevisFactory().handle(request, response);
    })
    .delete((request, response) => {
        return deleteDevisFactory().handle(request, response);
    });

export { devisRoutes };