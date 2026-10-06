const getAllEvents = async () => {
    const response = await fetch('/api/events')
    return response.json()
}

const getEventsById = async (id) => {
    const response = await fetch(`/api/events/${id}`)
    return response.json()
}

export default {
    getAllEvents,
    getEventsById
}
