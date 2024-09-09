import { prisma } from "../../database/client.js";

export class findAllPersonController {
    async handle(request, response) {
        const persons = await prisma.person.findMany()
        return response.status(200).json(persons)
    }
}
