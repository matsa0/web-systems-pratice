import { prisma } from "../../database/client.js";

export class createCityController {
    async handle(request, response) {
        const { name, state_id } = request.body

        const city = await prisma.city.create({
            data: {
                name, 
                state_id: parseInt(state_id)
            }
        })
        return response.status(201).json(city)
    }
}