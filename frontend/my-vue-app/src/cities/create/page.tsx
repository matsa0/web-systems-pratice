'use client'

import Input from "../../components/form/InputForm";
import { getAllStates } from "../../repository/state/stateRepository";
import IState from "../../types/IState";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function CidadeCreate() {

    const [ name, setName ] = useState('')
    const [ stateId, setStateId ] = useState('')

    const [ states, setStates ] = useState<IState[]>([])

    const { push } = useRouter()

    useEffect(() =>{
        getAllStates()
            .then((data: IState[]) => setStates(data))
            .catch((error: unknown) => console.error(error))
    }, [])

    const handleSubmit = async (event : FormEvent) => {

        event.preventDefault()

        const data = {
            name,
            state_id: stateId
        }

        const request: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            const response = await fetch('http://localhost:5000/cities', request)

            if (response.ok) {
                // Tratar o resultado
                const city = await response.json();
                const { id } = city;

                window.alert(`City created! Id: ${id}`)

                push('/cities')

            }

        } catch (error) {
            window.alert("Erro na inclusão da cidade!")
            console.error(error)
        }

    }

    return (
        <main>

            <form onSubmit={handleSubmit}>

                <Input
                    label="Nome da cidade"
                    name="nome"
                    value={name}
                    setValue={(event) => {
                        setName(event.target.value)
                    }}
                /> 

                <div>
                    <label htmlFor="estadoId">Estado</label>
                    <select
                        name="estadoId"
                        id="estadoId"
                        value={stateId}
                        onChange={(event) => {
                            setStateId(event.target.value)
                        }}
                    >
                        <option
                            value=""
                            selected
                            disabled
                        >Selecione:</option>
                        
                        {
                            states.map((state)=>{
                                return(
                                    <option 
                                        key={state.id}
                                        value={state.id}
                                    >
                                        {state.name}-{state.acronym}
                                    </option>
                                )
                            })
                        }
                    </select>    
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>
                </div>                   
            </form>
        </main>
    )


}