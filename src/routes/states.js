import { Router } from "express";
import { findAllController } from "../controller/states/findAllController.js";

const stateRouter = Router()

const findAll = new findAllController()

stateRouter.get('/states', findAll.handle)

export { stateRouter }