import { prisma } from "../../database/client.js";

export class deleteStateController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.state.delete({
            where: {
                id: parseInt(id)
            }
        })
        return response.status(204).json()
    }
}