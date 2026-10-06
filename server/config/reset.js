import { pool } from './database.js'
import locationsData from '../data/locations.js'
import eventsData from '../data/events.js'

const createTables = async () => {
    const query = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            slug VARCHAR(50) UNIQUE NOT NULL,
            name VARCHAR(100) NOT NULL,
            face CHAR(1) NOT NULL,
            color VARCHAR(20) NOT NULL,
            tagline TEXT
        );

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
            title VARCHAR(200) NOT NULL,
            type VARCHAR(50) NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            venue VARCHAR(200),
            start_time TIMESTAMPTZ NOT NULL,
            timezone VARCHAR(50) NOT NULL,
            puzzles TEXT[] NOT NULL DEFAULT '{}',
            description TEXT
        );

        CREATE INDEX IF NOT EXISTS events_location_start_idx ON events (location_id, start_time);
    `

    await pool.query(query)
    console.log('🎉 locations and events tables created')
}

const seedLocations = async () => {
    for (const location of locationsData) {
        await pool.query(
            'INSERT INTO locations (slug, name, face, color, tagline) VALUES ($1, $2, $3, $4, $5)',
            [location.slug, location.name, location.face, location.color, location.tagline]
        )
    }
    console.log(`✅ ${locationsData.length} locations added`)
}

const seedEvents = async () => {
    for (const event of eventsData) {
        await pool.query(
            `INSERT INTO events (location_id, title, type, city, country, venue, start_time, timezone, puzzles, description)
             VALUES ((SELECT id FROM locations WHERE slug = $1), $2, $3, $4, $5, $6, $7::timestamp AT TIME ZONE $8, $8, $9, $10)`,
            [event.location, event.title, event.type, event.city, event.country, event.venue, event.start_time, event.timezone, event.puzzles, event.description]
        )
    }
    console.log(`✅ ${eventsData.length} events added`)
}

try {
    await createTables()
    await seedLocations()
    await seedEvents()
}
catch (error) {
    console.error('⚠️ error resetting database', error)
    process.exitCode = 1
}
finally {
    await pool.end()
}
