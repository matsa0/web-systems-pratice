import { prisma } from "../../database/client.js";

export class deleteByIdBloodController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.bloodType.delete({
            where: {
                id: parseInt(id)
            }
        })

        return response.status(204).json()
    }
}