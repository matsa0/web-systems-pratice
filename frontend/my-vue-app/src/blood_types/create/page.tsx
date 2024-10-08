'use client'

import Input from "../../components/form/InputForm";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function BloodTypeCreate() {

    const [ type, setType ] = useState('')

    const { push } = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Type" value={type} onChange={e => setType(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}