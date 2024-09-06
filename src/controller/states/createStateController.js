import { prisma } from "../../database/client.js";

export class createStateController {
    async handle(request, response) {
        const { name, acronym } = request.body //data send from client through request.body

        const state = await prisma.state.create({
            data: {
                name,
                acronym
            }
        })
        return response.status(201).json(state)
    }
}