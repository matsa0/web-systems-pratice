import { Router } from "express";
import { findAllBloodController } from "../controller/blood_type/findAllBloodController.js";
import { findByIdBloodController } from "../controller/blood_type/findByIdBloodController.js";
import { createBloodController } from "../controller/blood_type/createBloodController.js";
import { updateBloodController } from "../controller/blood_type/updateBloodController.js";
import { deleteByIdBloodController } from "../controller/blood_type/deleteByIdBloodController.js";

const bloodRouter = Router()

const findAll = new findAllBloodController()
const findById = new findByIdBloodController()
const create = new createBloodController()
const update = new updateBloodController()
const deleteById = new deleteByIdBloodController()

bloodRouter.get('/bloods', findAll.handle);
bloodRouter.get('/bloods/:id', findById.handle)
bloodRouter.post('/bloods', create.handle)
bloodRouter.put('/bloods', update.handle)
bloodRouter.delete('/bloods/:id', deleteById.handle)

export { personsRouter };
