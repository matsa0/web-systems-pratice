import { Router } from "express";
import { findAllController } from "../controller/states/findAllStateController.js";
import { findByIdController } from "../controller/states/findByIdStateController.js";
import { createStateController } from "../controller/states/createStateController.js";

const stateRouter = Router()

const findAll = new findAllController()
const findById = new findByIdController()
const create = new createStateController()

stateRouter.get('/states', findAll.handle)
stateRouter.get('/states/:id', findById.handle)
stateRouter.post('/states', create.handle)

export { stateRouter }