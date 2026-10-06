const getAllEvents = async () => {
    const response = await fetch('/api/events')
    if (!response.ok) throw new Error('Could not load events')
    return response.json()
}

const getEventById = async (id) => {
    const response = await fetch(`/api/events/${id}`)
    if (!response.ok) throw new Error('Event not found')
    return response.json()
}

export default {
    getAllEvents,
    getEventById
}
