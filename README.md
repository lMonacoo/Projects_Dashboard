# projects-dashboard

Xogito challenge to create an dashboard listing projects and users

## Features added

- Login page
- Persistency of user on login and logout (Using localStorage)
- Persistency of users and projects registered with localStorage
- List of users
- Possibility to Edit and Delete and user
- Added and reducer to manage the dashboard state

## HELPERS

#### Branches

I usually use gitflow concepts but as this was a quick application. I just created the main branches.
**Develop** -> where did i do all the code
**Release** -> To check features
**Master** -> production branch (final code)

#### Commitlint

Particular ules, using concepts of gitmoji (changed by me)

- **example:** ✨ [dashboard]: markdown component
- **example:** ✨: markdown component

#### Vite

I choose to use the new Tooling ViteJs and the steps to start the applications is very similar to CRA

1. Install packages -> `npm install` || `yarn`
2. Run the server -> `npm run start` || `yarn start`

#### Redux Toolkit

I had few time to create the application, so I decided to make it easier and use the most recommended concept of Redux Toolkit: slices

#### React Testing Library

Unfortunately (and I didn't know that) Vite still doesn't have full support for React Testing library, which uses another bundler than rollup (bundler used in Vite)
