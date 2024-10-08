import ICity from "./ICity"

interface IState {
    id: number
    name: string
    acronym: string
    created_at: Date
    updated_at: Date
    City: ICity[]
}

export default IState