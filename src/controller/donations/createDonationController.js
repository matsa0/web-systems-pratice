import { prisma } from "../../database/client.js";

export class createDonationController {
    async handle(request, response) {
        const { person_id, local_id } = request.body

        try {
            await prisma.person.findFirstOrThrow({
                where: {
                    id: parseInt(person_id)
                }
            }) 
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error: error
            })
        }

        try {
            await prisma.local.findFirstOrThrow({
                where: {
                    id: parseInt(local_id)
                }
            }) 
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error: error
            })
        }

        const donation = await prisma.donation.create({
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
                }
            }
        })
        return response.status(201).json(donation)
    }
}