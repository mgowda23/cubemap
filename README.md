# WEB103 Project 3 - CubeMap

Submitted by: **MITHUN V GOWDA**

About this web app: **CubeMap is a virtual community space for Rubik's cube enthusiasts. Pick a region of the world on an interactive cube to discover speedcubing competitions, meetups, and workshops happening there.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [ ] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [ ]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [ ]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [ ] *Note: A non-visual list of links to different locations is insufficient.* 
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

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright [2026] [Mithun V Gowda]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.