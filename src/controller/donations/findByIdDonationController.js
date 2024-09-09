import { prisma } from "../../database/client.js";

export class findByIdDonationController {
    async handle(request, response) {
        const { id } = request.params
        const { person_id, local_id } = request.body

        try {
            const donation = await prisma.donation.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    person: true,  
                    local: {
                        include: {
                            city: true  
                        }
                    }
                }
            })
            return response.status(200).json(donation)

        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}