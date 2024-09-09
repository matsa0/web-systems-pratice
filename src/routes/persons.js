import { Router } from "express";
import { findAllPersonController } from "../controller/person/findAllPersonController.js";
import { findByIdPersonController } from "../controller/person/findByIdPersonController.js";
import { createPersonController } from "../controller/person/createPersonController.js";
import { updatePersonController } from "../controller/person/updatePersonController.js";
import { deleteByIdPersonController } from "../controller/person/deleteByIdPersonController.js";

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
