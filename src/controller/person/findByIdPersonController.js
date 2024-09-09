import { prisma } from "../../database/client.js";

export class findByIdPersonController {
    async handle(request, response) {
        const { id } = request.params

        try {
            const person = await prisma.person.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                },
                include: {
                    city: true,
                    blood_type: true
                }
            })
            return response.status(200).json(person)

        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}