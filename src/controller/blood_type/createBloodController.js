import { prisma } from "../../database/client.js";

export class createBloodController {
    async handle(request, response) {
        const { type, factor } = request.body

        const blood = await prisma.bloodType.create({
            data: {
                type,
                factor
            }
        })
        return response.status(201).json(blood)
    }
}