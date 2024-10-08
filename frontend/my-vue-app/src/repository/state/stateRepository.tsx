const getAllStates = async() => {
    const response = await fetch('http://localhost:5000/states', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdState = async(id: string) => {
    const response = await fetch(`http://localhost:5000/states/${id}`, {
        cache: 'no-cache'
    })
    return response.json();
}

export { getAllStates, getByIdState }

