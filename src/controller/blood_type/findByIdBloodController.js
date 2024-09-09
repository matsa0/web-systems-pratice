import { prisma } from "../../database/client.js";

export class findByIdBloodController {
    async handle(request, response) {
        const { id } = request.params

        try {
            const blood = await prisma.bloodType.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                }
            })
            return response.status(200).json(blood)

        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}