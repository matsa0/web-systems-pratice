import { prisma } from "../../database/client.js";

export class deleteByIdLocalController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.local.delete({
            where: {
                id: parseInt(id)
            }
        })

        return response.status(204).json()
    }
}