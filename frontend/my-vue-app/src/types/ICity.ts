import IState from "./IState"
import IPerson from "./IPerson"
import ILocal from "./ILocal"

interface ICity {
    id: number
    name: string
    state_id: number
    state: IState
    created_at: Date
    updated_at: Date
    Person: IPerson[]
    Local: ILocal[]
}

export default ICity