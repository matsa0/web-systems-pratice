import { Router } from "express";
import { findAllLocalController } from "../controller/local/findAllLocalController.js";
import { findByIdLocalController } from "../controller/local/findByIdLocalController.js";
import { createLocalController } from "../controller/local/createLocalController.js";
import { updateLocalController } from "../controller/local/updateLocalController.js";
import { deleteByIdLocalController } from "../controller/local/deleteByIdLocalController.js";

const localRouter = Router()

const findAll = new findAllLocalController()
const findById = new findByIdLocalController()
const create = new createLocalController()
const update = new updateLocalController()
const deleteById = new deleteByIdLocalController()

localRouter.get('/locals', findAll.handle);
localRouter.get('/locals/:id', findById.handle)
localRouter.post('/locals', create.handle)
localRouter.put('/locals', update.handle)
localRouter.delete('/locals/:id', deleteById.handle)

export { personsRouter };
