# 🌐 Reber Building Virtual Tour
### Kinetic Engineering Collective — Penn State Capstone 2025
**Department of Mechanical Engineering · Penn State College of Engineering**

---

## Overview

This project is a web-based interactive showcase and 360° virtual tour of the newly redesigned hallway in the Reber Building at Penn State. Built as a capstone project by the Kinetic Engineering Collective, it pairs a physical hallway renovation with a fully browser-accessible immersive experience — letting prospective students, faculty, and remote visitors explore the space from anywhere in the world.

---

## Features

- **Dashboard UI** — Penn State-branded single-page app with a sidebar and card-based overview
- **360° Virtual Tour** — Pannellum-powered panoramic viewer with multi-scene navigation and interactive hotspots
- **About the Project** — Full project description with goals, outcomes, and specs
- **Design Process** — 7-step timeline from brainstorming to final showcase
- **Meet the Team** — Team cards with email and LinkedIn links
- **Our Spending** — Animated budget tracker ($1,150 of $1,250 used)
- **Did You Know?** — Fun facts about the project and its impact on the ME department
- **Fully Responsive** — Works on desktop, tablet, and mobile

---

## File Structure

```
showcase-website/
├── index.html                  # Main dashboard (SPA — all pages live here)
├── style.css                   # Penn State-branded styles, layout, responsive rules
├── script.js                   # SPA navigation, budget animation, tour modal
├── tour.html                   # Isolated Pannellum 360° viewer
│
├── penn-state-logo.png         # Penn State shield logo (sidebar + topbar)
├── mechanical-engineering-logo.png  # ME department logo (topbar)
├── lets-walk.png               # "Let's Walk" dashboard card background
├── about-the-project.png       # About card + detail page hero image
├── design-process.png          # Design Process card background
│
└── README.md                   # This file
```

---

## Getting Started

No build tools or servers required. Open `index.html` directly in any modern browser:

```
File → Open → index.html
```

Or serve locally for the best experience (avoids any browser file restrictions):

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Adding Your 360° Panorama Images

The virtual tour is pre-configured with 4 scenes. To activate them:

1. Create an `images/` folder inside `showcase-website/`
2. Add your equirectangular panorama photos (`.jpg` or `.png`)
3. Open `tour.html` and update the `panorama:` field for each scene in the `sceneConfig` block:

```javascript
scene1: {
  title: 'Entrance Hall',
  panorama: 'images/entrance-hall.jpg',   // ← add your file path here
  hotSpots: [ ... ]
},
```

**Tip:** Each scene supports hotspots — clickable points that show info or link to another scene. Add them inside the `hotSpots: []` array for each scene using `pitch` (up/down) and `yaw` (left/right) values.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 / JavaScript | Core web structure, styling, and logic |
| [Pannellum](https://pannellum.org/) | Open-source WebGL 360° panoramic viewer |
| [Inter](https://fonts.google.com/specimen/Inter) | Typography (Google Fonts) |
| [Lucide Icons](https://lucide.dev/) | UI icon set |

No frameworks. No build step. Runs entirely in the browser.

---

## Budget

| Category | Amount |
|---|---|
| Total Budget | $1,250.00 |
| Total Spent | $1,150.00 |
| Remaining | $100.00 |
| Utilisation | 92% |

---

## Team

**Kinetic Engineering Collective**

| Name | Role | LinkedIn |
|---|---|---|
| Michelle Kelly | *(TODO)* | [linkedin.com/in/michellekelly27](https://www.linkedin.com/in/michellekelly27/) |
| Joshua Bruce | *(TODO)* | — |
| Edward Warren | *(TODO)* | — |
| Ilham Kassim | Lead Developer | [linkedin.com/in/ilhamkassim](https://www.linkedin.com/in/ilhamkassim/) |
| Adriana Amizal | *(TODO)* | [linkedin.com/in/adrianaamizal04](https://www.linkedin.com/in/adrianaamizal04/) |
| Siddhardh Tekumalla | *(TODO)* | — |
| Rahul Deshpande | *(TODO)* | [linkedin.com/in/rahulmadhavdeshpande](https://www.linkedin.com/in/rahulmadhavdeshpande/) |

---

## TODO Checklist

- [ ] Fill in team member names, roles, bios, emails, and LinkedIn URLs in `index.html`
- [ ] Add panorama images to `images/` and update `tour.html` scene config
- [ ] Update spending breakdown categories and amounts in the Budget page
- [ ] Update scene names and hotspot positions in `tour.html`
- [ ] Add your institution/course name in the footer of `index.html`

---

## License

This project was created for academic purposes as part of Penn State's Capstone program. All content and imagery belongs to the Kinetic Engineering Collective and Penn State University.
