import { prisma } from "../../database/client.js";

export class findByIdLocalController {
    async handle(request, response) {
        const { id } = request.params

        try {
            const local = await prisma.local.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    city: true,
                }
            })
            return response.status(200).json(local)

        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}