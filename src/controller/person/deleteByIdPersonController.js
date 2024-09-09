import { prisma } from "../../database/client.js";

export class deleteByIdPersonController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.person.delete({
            where: {
                id: parseInt(id)
            }
        })

        return response.status(204).json()
    }
}