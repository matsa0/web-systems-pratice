import IPerson from "./IPerson"
import ILocal from "./ILocal"

interface IDonation {
    id: number
    person_id: number
    person: IPerson
    local_id: number
    local: ILocal
    created_at: Date
    updated_at: Date
}

export default IDonation