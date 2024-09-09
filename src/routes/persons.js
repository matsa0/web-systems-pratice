import { Router } from "express";
import { findAllPersonController } from "../controller/persons/findAllPersonController.js";
import { findByIdPersonController } from "../controller/persons/findByIdPersonController.js";
import { createPersonController } from "../controller/persons/createPersonController.js";
import { updatePersonController } from "../controller/persons/updatePersonController.js";
import { deleteByIdPersonController } from "../controller/persons/deleteByIdPersonController.js";

const personsRouter = Router()

const findAll = new findAllPersonController()
const findById = new findByIdPersonController()
const create = new createPersonController()
const update = new updatePersonController()
const deleteById = new deleteByIdPersonController()

personsRouter.get('/persons', findAll.handle);
personsRouter.get('/persons/:id', findById.handle)
personsRouter.post('/persons', create.handle)
personsRouter.put('/persons', update.handle)
personsRouter.delete('/persons/:id', deleteById.handle)

export { personsRouter };
