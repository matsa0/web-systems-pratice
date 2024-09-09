import { Router } from "express";
import { findAllDonationController } from "../controller/donations/findAllDonationController.js";
import { findByIdDonationController } from "../controller/donations/findByIdDonationController.js";
import { createDonationController } from "../controller/donations/createDonationController.js";
import { updateDonationController } from "../controller/donations/updateDonationController.js";
import { deleteByIdDonationController } from "../controller/donations/deleteByIdDonationController.js";

const donationsRouter = Router()

const findAll = new findAllDonationController()
const findById = new findByIdDonationController()
const create = new createDonationController()
const update = new updateDonationController()
const deleteById = new deleteByIdDonationController()

donationsRouter.get('/donations', findAll.handle);
donationsRouter.get('/donations/:id', findById.handle)
donationsRouter.post('/donations', create.handle)
donationsRouter.put('/donations', update.handle)
donationsRouter.delete('/donations/:id', deleteById.handle)

export { donationsRouter };
