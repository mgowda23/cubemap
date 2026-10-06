import { pool } from '../config/database.js'

const eventsQuery = `
    SELECT events.*, locations.slug AS location_slug, locations.name AS location_name, locations.color AS location_color
    FROM events
    JOIN locations ON locations.id = events.location_id
`

const getEvents = async (req, res) => {
    try {
        const results = await pool.query(`${eventsQuery} ORDER BY events.start_time`)
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const results = await pool.query(`${eventsQuery} WHERE events.id = $1`, [req.params.id])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Event not found' })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getEvents,
    getEventById
}
