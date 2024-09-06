import express from 'express'
import { mainRouter } from './routes/main.js'
import { stateRouter } from './routes/states.js'

const server = express()
const PORT = 5000

server.use(express.json())
//Routes
server.use(mainRouter)
server.use(stateRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})  