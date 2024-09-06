import { prisma } from "../../database/client.js";

export class findByIdCityController {
    async handle(request, response) {
        const { id } = request.params

        const city = await prisma.city.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(city)
    }
}