import express from 'express'

const server = express()
const PORT = 5000

server.use(express.json())

server.get('/', (request, response) => {
    response.json({
        message: 'Status server is running'
    })
})

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})  