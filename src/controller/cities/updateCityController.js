import { prisma } from "../../database/client.js";

export class updateCityController {
    async handle(request, response) {
        const { id, name, state_id } = request.body

        const city = await prisma.city.update({
            data: {
                name,
                state_id: parseInt(state_id),
                updated_at: new Date()
            },
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(city)
    }
}