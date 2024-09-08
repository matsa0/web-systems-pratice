import { prisma } from "../../database/client.js";

export class createCityController {
    async handle(request, response) {
        const { name, state_id } = request.body

        try {
            await prisma.state.findFirstOrThrow({
                where: {
                    id: parseInt(state_id)
                }
            }) 
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error: error
            })
        }

        const city = await prisma.city.create({
            data: {
                name, 
                state: {
                    connect: {
                        id: parseInt(state_id)
                    }
                }
            }
        })
        return response.status(201).json(city)
    }
}