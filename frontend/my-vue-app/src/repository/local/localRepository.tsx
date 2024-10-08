const getAllLocals = async() => {
    const response = await fetch('http://localhost:5000/locals', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdLocal = async(id: string) => {
    const response = await fetch(`http://localhost:5000/locals/${id}`, {
        cache: 'no-cache'
    })
    return response.json();
}

export { getAllLocals, getByIdLocal }