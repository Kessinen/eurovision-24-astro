# Eurovision 24 homestudio

## Installation

To install the dependencies, run `npm install`.

To start the development server, run `npm run dev`.

Requires enviromental variables:

| Variable | Description |
| :------ | :--------- |
| `ADMIN_PASSWORD` | Default password for the `admin` user. |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## TODOS

- [x] Change review scale to 1-10
- [x] Remove semifinals from the app. Reviewing of finals is all that is needed.
- [x] In partisipants view the review score should be selected when input field is focused.
- [x] Goto participant listing after a review is given
- [x] Results screen
- [x] Admin panel
  - [x] Add new user
  - [ ] Reset password (If time to implement)
- [ ] New review score of stage. (If time to implement)
- [ ] Code refactoring (If time to implement)
  - [ ] Helper funtions to a separate file

