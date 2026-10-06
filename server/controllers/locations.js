import { pool } from '../config/database.js'

const getLocations = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT locations.*, COUNT(events.id)::int AS event_count
            FROM locations
            LEFT JOIN events ON events.location_id = locations.id
            GROUP BY locations.id
            ORDER BY locations.id
        `)
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getLocationBySlug = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations WHERE slug = $1', [req.params.slug])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getLocationEvents = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT events.*, locations.slug AS location_slug, locations.name AS location_name, locations.color AS location_color
            FROM events
            JOIN locations ON locations.id = events.location_id
            WHERE locations.slug = $1
            ORDER BY events.start_time
        `, [req.params.slug])
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getLocations,
    getLocationBySlug,
    getLocationEvents
}
