import { prisma } from "../../database/client.js";

export class findAllCityController {
    async handle(request, response) {
        const cities = await prisma.city.findMany({
            include: {
                state: true
            }
        })
        return response.status(200).json(cities)
    }
}
