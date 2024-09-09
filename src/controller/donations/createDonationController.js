import { prisma } from "../../database/client.js";

export class createDonationController {
    async handle(request, response) {
        const { person_id, local_id, date } = request.body;

        try {
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
                    },
                    date: new Date(date) 
                }
            });

            return response.status(201).json(donation);
        } catch (error) {
            return response.status(400).json({
                message: 'Error creating donation.',
                error: error.message
            });
        }
    }
}
