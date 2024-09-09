import { prisma } from "../../database/client.js";

export class findByIdCityController {
    async handle(request, response) {
        const { id } = request.params

        try {
            const city = await prisma.city.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    state: true,
                    Local: true
                }
            })
            return response.status(200).json(city)

        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}