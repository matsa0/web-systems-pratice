import { prisma } from "../../database/client.js";

export class updateBloodController {
    async handle(request, response) {
        const { id, type, factor } = request.body

        const blood = await prisma.bloodType.update({
            data: {
                type,
                factor
            },
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(blood)
    }
}