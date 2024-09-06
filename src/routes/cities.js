import { Router } from "express";
import { findAllCityController } from "../controller/cities/findAllCityController.js";
import { findByIdCityController } from "../controller/cities/findByIdCityController.js";
import { createCityController } from "../controller/cities/createCityController.js";
import { updateCityController } from "../controller/cities/updateCityController.js";
import { deleteByIdCityController } from "../controller/cities/deleteByIdCityController.js";

const citiesRouter = Router()

const findAll = new findAllCityController()
const findById = new findByIdCityController()
const create = new createCityController()
const update = new updateCityController()
const deleteById = new deleteByIdCityController()


citiesRouter.get('/cities', findAll.handle);
citiesRouter.get('/cities/:id', findById.handle)
citiesRouter.post('/cities', create.handle)
citiesRouter.put('/cities', update.handle)
citiesRouter.delete('/cities/:id', deleteById.handle)


export { citiesRouter }