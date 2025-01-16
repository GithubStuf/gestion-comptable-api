import { Router } from "express";
import { createMarcheFactory } from "../usecases/Marche/CreateMarche/CreateMarcheFactory";
import { findAllMarchesFactory } from "../usecases/Marche/FindAllMarche/FindAllMarchesFactory";
import { findMarcheByIdFactory } from "../usecases/Marche/FindByIdMarche/FindMarcheByIdFactory";
import { updateMarcheFactory } from "../usecases/Marche/UpdateMarche/UpdateMarcheFactory";
import { deleteMarcheFactory } from "../usecases/Marche/DeleteMarche/DeleteMarcheFactory";

const marcheRoutes = Router();

marcheRoutes.route("/")
    .post((request, response) => {
        return createMarcheFactory().handle(request, response);
    })
    .get((request, response) => {
        return findAllMarchesFactory().handle(request, response);
    });

marcheRoutes.route("/:id")
    .get((request, response) => {
        return findMarcheByIdFactory().handle(request, response);
    })
    .put((request, response) => {
        return updateMarcheFactory().handle(request, response);
    })
    .delete((request, response) => {
        return deleteMarcheFactory().handle(request, response);
    });

export { marcheRoutes };