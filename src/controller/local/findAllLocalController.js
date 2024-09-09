import { prisma } from "../../database/client.js";

export class findAllLocalController {
    async handle(request, response) {
        const locals = await prisma.local.findMany({
            include: {
                city: true
            }
        })
        return response.status(200).json(locals)
    }
}
