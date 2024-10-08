'use client'

import Input from "../../components/form/InputForm";
import { getAllPersons } from "../../repository/person/personRepository";
import { getAllLocals } from "../../repository/local/localRepository";
import IPerson from "../../types/IPerson";
import ILocal from "../../types/ILocal";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function DonationCreate() {

    const [ personId, setPersonId ] = useState('')
    const [ localId, setLocalId ] = useState('')

    const [ persons, setPersons ] = useState<IPerson[]>([])
    const [ locals, setLocals ] = useState<ILocal[]>([])

    const { push } = useRouter()

    useEffect(() => {
        getAllPersons().then(setPersons)
        getAllLocals().then(setLocals)
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={personId} onChange={e => setPersonId(e.target.value)}>
                <option value="">Select Person</option>
                {persons.map(person => (
                    <option key={person.id} value={person.id}>{person.name}</option>
                ))}
            </select>
            <select value={localId} onChange={e => setLocalId(e.target.value)}>
                <option value="">Select Local</option>
                {locals.map(local => (
                    <option key={local.id} value={local.id}>{local.name}</option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}