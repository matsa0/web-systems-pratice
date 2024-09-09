import express from 'express'
import { mainRouter } from './routes/main.js'
import { stateRouter } from './routes/states.js'
import { citiesRouter } from './routes/cities.js'
import { donationsRouter } from './routes/donations.js'
import { bloodRouter } from './routes/bloodTypes.js'
import { localsRouter } from './routes/locals.js'
import { personsRouter } from './routes/persons.js'


const server = express()
const PORT = 5000

server.use(express.json())
//Routes
server.use(mainRouter)
server.use(stateRouter)
server.use(citiesRouter)
server.use(donationsRouter)
server.use(bloodRouter)
server.use(localsRouter)
server.use(personsRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})  