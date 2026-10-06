# WEB103 Project 3 - CubeMap

Submitted by: **MITHUN V GOWDA**

About this web app: **CubeMap is a virtual community space for Rubik's cube enthusiasts. Pick a region of the world on an interactive cube to discover speedcubing competitions, meetups, and workshops happening there.**

Time spent: **4** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.*
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] The front page is an unfolded Rubik's cube: each face is a world region, and hovering a face gives it a turn
- [x] Events page supports filtering by region, sorting (upcoming first, by date, by name) and hiding past events
- [x] Filters are saved in the URL (e.g. `/events?location=asia`) so filtered views can be shared
- [x] Event times are shown in each venue's local timezone
- [x] Countdowns tick live every second in a speedcubing-timer style
- [x] Friendly "not found" pages for unknown routes and locations

## Personal Stretch Features (Planned)

Ideas I want to build beyond the course requirements:

- [ ] **Host an Event page**: anyone interested in hosting a cubing event (competition, meetup, workshop) at a venue can submit it to the platform
  - [ ] Submission form (event title, venue, city, date/time, puzzle types, description)
  - [ ] Submitted events go into a review queue (`pending` → `approved`) before appearing publicly

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='CubeMap_walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)

## Notes

Put the database settings in `server/.env`: `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`, and `PGDATABASE` (use the **External** hostname from Render).

1. Run `npm install` in the project root.
2. Run `npm run reset` once to create the `locations` and `events` tables and fill them with sample data.
3. Run `npm run dev` to start both the React frontend and the Express backend.

Open [http://localhost:5173](http://localhost:5173). Vite serves the React app on port 5173 and forwards `/api` requests to the Express server on port 3000, which reads from the Render Postgres database.

The database has two tables. `locations` holds the six regions, one for each face of the cube, and `events` holds the events. Each event points to its region through a `location_id` foreign key, so a location page only needs the region's slug (for example `/locations/asia`) to load its events. Event times are stored as `TIMESTAMPTZ` along with the venue's timezone, so the countdown works from the exact moment and the date is shown in the venue's local time.

Challenges:

- Getting the small cube face in each location header to render. Percentage padding is measured from the parent element's width, so the stickers were squeezed to nothing until I moved the padding onto an inner element.
- Keeping countdowns accurate across timezones, which is why events store both the exact time and the venue's timezone.

The events are realistic sample data for the project, not real World Cube Association competitions.

## License

Copyright 2026 Mithun V Gowda

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.