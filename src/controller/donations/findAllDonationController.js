import { prisma } from "../../database/client.js";

export class findAllDonationController {
    async handle(request, response) {
        const donations = await prisma.donation.findMany()
        return response.status(200).json(donations)
    }
}
