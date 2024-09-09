import { Router } from "express";
import { findAllLocalController } from "../controller/local/findAllLocalController.js";
import { findByIdLocalController } from "../controller/local/findByIdLocalController.js";
import { createLocalController } from "../controller/local/createLocalController.js";
import { updateLocalController } from "../controller/local/updateLocalController.js";
import { deleteByIdLocalController } from "../controller/local/deleteByIdLocalController.js";

const localsRouter = Router()

const findAll = new findAllLocalController()
const findById = new findByIdLocalController()
const create = new createLocalController()
const update = new updateLocalController()
const deleteById = new deleteByIdLocalController()

localsRouter.get('/locals', findAll.handle);
localsRouter.get('/locals/:id', findById.handle)
localsRouter.post('/locals', create.handle)
localsRouter.put('/locals', update.handle)
localsRouter.delete('/locals/:id', deleteById.handle)

export { localsRouter };
