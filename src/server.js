import express from 'express'
import { mainRouter } from './routes/main.js'
import { stateRouter } from './routes/states.js'
import { citiesRouter } from './routes/cities.js'
import { donationsRouter } from './routes/donations.js'

const server = express()
const PORT = 5000

server.use(express.json())
//Routes
server.use(mainRouter)
server.use(stateRouter)
server.use(citiesRouter)
server.use(donationsRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})  