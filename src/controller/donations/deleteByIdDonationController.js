import { prisma } from "../../database/client.js";

export class deleteByIdDonationController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.donation.delete({
            where: {
                id: parseInt(id)
            }
        })

        return response.status(204).json()
    }
}