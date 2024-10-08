import { Router } from "express";
import { findAllController } from "../controller/states/findAllStateController.js";
import { findByIdController } from "../controller/states/findByIdStateController.js";
import { createStateController } from "../controller/states/createStateController.js";
import { updateStateController } from "../controller/states/updateStateController.js";
import { deleteStateController } from "../controller/states/deleteStateController.js";

const stateRouter = Router()

const findAll = new findAllController()
const findById = new findByIdController()
const create = new createStateController()
const update = new updateStateController()
const deleteById = new deleteStateController()

stateRouter.get('/states', findAll.handle)
stateRouter.get('/states/:id', findById.handle)
stateRouter.post('/states', create.handle)
stateRouter.put('/states', update.handle)
stateRouter.delete('/states/:id', deleteById.handle)

export { stateRouter }