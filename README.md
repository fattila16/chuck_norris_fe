This is a [Next.js](https://nextjs.org/) SPA to interact with https://api.chucknorris.io/.

## Project Architecture

This project is bootsrapped with `npx create-next-app`. The project is structured like a typical [Next.js] application.
```
├── README.md
├── cypress
│   ├── eslint.rc.json
│   ├── integration -> Integration tests
│   ├── screenshots
│   ├── tsconfig.json
│   └── videos
├── cypress.json
├── jest.config.js
├── next-env.d.ts
├── package-lock.json
├── package.json
├── pages -> Pages, app routes
│   ├── __tests__
│   └── index.tsx
├── public
│   └── css
├── setupTest.ts
├── src
│   ├── assets -> Assets for the UI components
│   ├── components -> UI components
│   ├── hooks -> Custom hooks for the business logic
│   └── pages -> Page layout components.
├── state -> Business logic for the state.
├── tsconfig.json
└── typings -> TS types.
```

I use [Zustand](https://github.com/react-spring/zustand) as a global state management library. Because the app logic is quite simple I don't need a heavy lifter dependency like [Redux](https://github.com/reduxjs/redux) or [Mobx](https://mobx.js.org/README.html).

I use [useSWR](https://github.com/vercel/swr) to handle remote data fetching. This way I can utilize response caching, and have a smoother and faster experience.

I use a [PostCSS](https://www.npmjs.com/package/postcss-rtl) plugin create LTR and [RTL](https://en.wikipedia.org/wiki/Right-to-left) styled components.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Before you are able to run the web app, please install the dependencies.

```
npm install
```

### Running in development

You can run the development version of the app via the following command:

```
npm run dev
```

## Testing

The project includes automated testing solutions. I choose [Jest](https://jestjs.io/) and [Enzyme](https://github.com/enzymejs/enzyme) for unit testing, and [Cypress](https://www.cypress.io/) for end-to-end testing

### Running the unit tests:

You can operate with the unit testing framework via the following commands:

```
npm run test:unit -> Runs Jest
npm run test:unit:watch -> Runs Jest in watch mode
npm run test:unit:coverage -> Runs Jest with code coverage statistics
```

You can operate with the e2e testing framework via the following commands:

```
npm run test:e2e -> Runs cypress in headless mode.
npm run test:e2e:ui -> Runs cypress with UI mode.
```

## Coding style

I use Eslint for code-linting, and the recommended rulesets for React/Typscript/Hooks etc...

## How to deploy

I use Vercel for live deployment.
link: (https://chuck-norris-fe-delta.vercel.app)

