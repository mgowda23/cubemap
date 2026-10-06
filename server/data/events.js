// Sample events for seeding. start_time is the local wall-clock time at the venue,
// converted to UTC using the event's IANA timezone when inserted.
const eventsData = [
    // Europe
    { location: 'europe', title: 'Berlin Winter Cubing 2026', type: 'competition', city: 'Berlin', country: 'Germany', venue: 'Kulturbrauerei', start_time: '2026-12-12 09:00', timezone: 'Europe/Berlin', puzzles: ['3x3', '2x2', '4x4', 'OH'], description: 'A two-day winter competition with a full 3x3 bracket and side events.' },
    { location: 'europe', title: 'London Cube Social', type: 'meetup', city: 'London', country: 'United Kingdom', venue: 'Southbank Centre', start_time: '2026-10-25 14:00', timezone: 'Europe/London', puzzles: ['3x3', 'Skewb'], description: 'Casual afternoon of solving, trading cubes and swapping algorithms. All levels welcome.' },
    { location: 'europe', title: 'Paris Big Cubes Weekend', type: 'competition', city: 'Paris', country: 'France', venue: 'Halle Pajol', start_time: '2026-06-13 10:00', timezone: 'Europe/Paris', puzzles: ['5x5', '6x6', '7x7'], description: 'A weekend dedicated to big cubes. Bring your lube and your patience.' },
    { location: 'europe', title: 'Madrid FMC Night', type: 'competition', city: 'Madrid', country: 'Spain', venue: 'Biblioteca Eugenio Trías', start_time: '2027-01-23 18:00', timezone: 'Europe/Madrid', puzzles: ['FMC'], description: 'Fewest moves challenge: one hour, one scramble, pen and paper only.' },

    // North America
    { location: 'north-america', title: 'Bay Area Speedcubing Fall Open', type: 'competition', city: 'San Jose', country: 'United States', venue: 'San Jose Convention Center', start_time: '2026-11-14 09:00', timezone: 'America/Los_Angeles', puzzles: ['3x3', '2x2', 'OH', 'Pyraminx'], description: 'One of the largest fall competitions on the West Coast.' },
    { location: 'north-america', title: 'Toronto Cube Meetup', type: 'meetup', city: 'Toronto', country: 'Canada', venue: 'Toronto Reference Library', start_time: '2026-10-18 13:00', timezone: 'America/Toronto', puzzles: ['3x3', '4x4'], description: 'Monthly meetup for Toronto-area cubers. Beginners can get help learning their first solve.' },
    { location: 'north-america', title: 'Mexico City Blindfolded Challenge', type: 'competition', city: 'Mexico City', country: 'Mexico', venue: 'Centro Cultural Universitario', start_time: '2026-08-22 10:00', timezone: 'America/Mexico_City', puzzles: ['3BLD', '4BLD', 'MBLD'], description: 'Memorize, put on the blindfold, solve. A blindfolded-only competition.' },
    { location: 'north-america', title: 'Intro to CFOP Workshop', type: 'workshop', city: 'Chicago', country: 'United States', venue: 'Harold Washington Library', start_time: '2026-12-05 11:00', timezone: 'America/Chicago', puzzles: ['3x3'], description: 'Go from beginner method to CFOP: cross, F2L, OLL and PLL explained step by step.' },

    // Africa
    { location: 'africa', title: 'Lagos Speedcubing Championship', type: 'competition', city: 'Lagos', country: 'Nigeria', venue: 'Landmark Event Centre', start_time: '2026-11-28 09:00', timezone: 'Africa/Lagos', puzzles: ['3x3', '2x2', 'Pyraminx', 'Skewb'], description: 'West Africa\'s biggest cubing event of the year.' },
    { location: 'africa', title: 'Cape Town Cube Meetup', type: 'meetup', city: 'Cape Town', country: 'South Africa', venue: 'V&A Waterfront', start_time: '2026-09-19 11:00', timezone: 'Africa/Johannesburg', puzzles: ['3x3'], description: 'Seaside solving session and relay races.' },
    { location: 'africa', title: 'Nairobi Youth Cubing Workshop', type: 'workshop', city: 'Nairobi', country: 'Kenya', venue: 'iHub', start_time: '2026-10-31 10:00', timezone: 'Africa/Nairobi', puzzles: ['3x3', '2x2'], description: 'A free workshop teaching students their first solve. Cubes provided.' },
    { location: 'africa', title: 'Cairo Open 2027', type: 'competition', city: 'Cairo', country: 'Egypt', venue: 'Cairo International Convention Centre', start_time: '2027-02-20 09:00', timezone: 'Africa/Cairo', puzzles: ['3x3', '4x4', 'OH', 'Megaminx'], description: 'Kick off the 2027 season in Cairo.' },

    // Asia
    { location: 'asia', title: 'Bengaluru Cube Open 2026', type: 'competition', city: 'Bengaluru', country: 'India', venue: 'Bangalore International Centre', start_time: '2026-11-07 09:30', timezone: 'Asia/Kolkata', puzzles: ['3x3', '2x2', '4x4', 'OH', 'Pyraminx'], description: 'South India\'s largest open competition, with finals streamed live.' },
    { location: 'asia', title: 'Tokyo Speedcubing Festival', type: 'competition', city: 'Tokyo', country: 'Japan', venue: 'Tokyo Big Sight', start_time: '2026-07-18 09:00', timezone: 'Asia/Tokyo', puzzles: ['3x3', '2x2', 'Clock', 'Square-1'], description: 'A summer festival packed with record attempts.' },
    { location: 'asia', title: 'Singapore OH Showdown', type: 'competition', city: 'Singapore', country: 'Singapore', venue: 'Suntec City', start_time: '2026-12-19 10:00', timezone: 'Asia/Singapore', puzzles: ['OH', '3x3'], description: 'One hand, one goal. A one-handed focused competition.' },
    { location: 'asia', title: 'Seoul Cube Café Meetup', type: 'meetup', city: 'Seoul', country: 'South Korea', venue: 'Hongdae Board Game Café', start_time: '2026-10-11 15:00', timezone: 'Asia/Seoul', puzzles: ['3x3', 'Megaminx'], description: 'Coffee, cubes and friendly races in Hongdae.' },

    // Oceania
    { location: 'oceania', title: 'Sydney Summer Cubing 2027', type: 'competition', city: 'Sydney', country: 'Australia', venue: 'Sydney Olympic Park', start_time: '2027-01-16 09:00', timezone: 'Australia/Sydney', puzzles: ['3x3', '2x2', '3BLD', 'OH'], description: 'The biggest summer competition in Australia.' },
    { location: 'oceania', title: 'Melbourne Megaminx Masters', type: 'competition', city: 'Melbourne', country: 'Australia', venue: 'Melbourne Town Hall', start_time: '2026-05-09 10:00', timezone: 'Australia/Melbourne', puzzles: ['Megaminx', 'Pyraminx'], description: 'Twelve faces, one champion.' },
    { location: 'oceania', title: 'Auckland Cube Meetup', type: 'meetup', city: 'Auckland', country: 'New Zealand', venue: 'Auckland Central Library', start_time: '2026-10-24 13:00', timezone: 'Pacific/Auckland', puzzles: ['3x3', '4x4'], description: 'Weekend meetup for solvers across Auckland.' },
    { location: 'oceania', title: 'Brisbane Beginner Workshop', type: 'workshop', city: 'Brisbane', country: 'Australia', venue: 'State Library of Queensland', start_time: '2026-11-21 10:00', timezone: 'Australia/Brisbane', puzzles: ['3x3'], description: 'Learn to solve the cube in one afternoon.' },

    // South America
    { location: 'south-america', title: 'São Paulo Cubing Open 2026', type: 'competition', city: 'São Paulo', country: 'Brazil', venue: 'Expo Center Norte', start_time: '2026-11-21 09:00', timezone: 'America/Sao_Paulo', puzzles: ['3x3', '2x2', '4x4', '5x5', 'OH'], description: 'Brazil\'s biggest open, with hundreds of competitors.' },
    { location: 'south-america', title: 'Buenos Aires Cube Meetup', type: 'meetup', city: 'Buenos Aires', country: 'Argentina', venue: 'Centro Cultural Kirchner', start_time: '2026-10-17 16:00', timezone: 'America/Argentina/Buenos_Aires', puzzles: ['3x3', 'Skewb'], description: 'Afternoon meetup with relay races and a mini-competition.' },
    { location: 'south-america', title: 'Lima Speedcubing Classic', type: 'competition', city: 'Lima', country: 'Peru', venue: 'Centro de Convenciones de Lima', start_time: '2026-04-25 09:00', timezone: 'America/Lima', puzzles: ['3x3', '2x2', 'Pyraminx'], description: 'A classic Peruvian competition with a fast 3x3 final.' },
    { location: 'south-america', title: 'Bogotá Square-1 & Skewb Day', type: 'competition', city: 'Bogotá', country: 'Colombia', venue: 'Biblioteca Virgilio Barco', start_time: '2026-12-06 10:00', timezone: 'America/Bogota', puzzles: ['Square-1', 'Skewb'], description: 'A day for the shape-shifting puzzles.' }
]

export default eventsData
