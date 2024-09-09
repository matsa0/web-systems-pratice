import { prisma } from "../../database/client.js";

export class findAllBloodController {
    async handle(request, response) {
        const bloods = await prisma.bloodType.findMany()
        return response.status(200).json(bloods)
    }
}
