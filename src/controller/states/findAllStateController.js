import { prisma } from "../../database/client.js";

export class findAllController {

    async handle(request, response) {
        const states = await prisma.state.findMany()
        return response.status(200).json(states)
    }
}