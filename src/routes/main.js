import { Router } from "express";

const mainRouter = Router()

mainRouter.get('/', (request, response) => {
    response.json({
        message: 'Status server is running'
    })
})

export { mainRouter }