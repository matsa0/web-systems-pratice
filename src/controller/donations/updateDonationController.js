import { prisma } from "../../database/client.js";

export class updateDonationController {
    async handle(request, response) {
        const { id, person_id, local_id } = request.body

        const city = await prisma.city.update({
            data: {
                person: {
                    connect: {
                        id: parseInt(person_id)
                    }
                },
                local: {
                    connect: {
                        id: parseInt(local_id)
                    }
                },
                updated_at: new Date()
            },
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(city)
    }
}