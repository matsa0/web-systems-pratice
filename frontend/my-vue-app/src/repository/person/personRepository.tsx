const getAllPersons = async() => {
    const response = await fetch('http://localhost:5000/persons', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdPerson = async(id: string) => {
    const response = await fetch(`http://localhost:5000/persons/${id}`, {
        cache: 'no-cache'
    })
    return response.json();
}

export { getAllPersons, getByIdPerson } 