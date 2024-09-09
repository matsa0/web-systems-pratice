import { prisma } from "../../database/client.js";

export class createPersonController {
    async handle(request, response) {
        const { name, street, number, complement, city_id } = request.body

        try {
            await prisma.city.findFirstOrThrow({
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

        const local = await prisma.local.create({
            data: {
                name,
                street,
                number,
                complement, 
                city: {
                    connect: {
                        id: parseInt(city_id)
                    }
                }
            }
        })
        return response.status(201).json(local)
    }
}