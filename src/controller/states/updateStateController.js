import { prisma } from "../../database/client.js";

export class updateStateController {
    async handle(request, response) {
        const { id, name, acronym } = request.body

        const state = await prisma.state.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                acronym,
                updated_at: new Date()
            }
        })
        return response.status(200).json(state)
    }
}