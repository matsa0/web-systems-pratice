import { Router } from "express";
import { findAllController } from "../controller/states/findAllController.js";
import { findByIdController } from "../controller/states/findByIdController.js";

const stateRouter = Router()

const findAll = new findAllController()
const findById = new findByIdController()

stateRouter.get('/states', findAll.handle)
stateRouter.get('/states/:id', findById.handle)

export { stateRouter }