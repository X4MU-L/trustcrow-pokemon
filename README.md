This is a [Next.js](https://nextjs.org/)/[React](https://react.dev/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project uses integrates the [Pokemon Api](https://pokeapi.co/) using [Axios](https://axios-http.com/) for http request and also [Typescript](https://www.typescriptlang.org/) for static typing.

## Getting Started

First, run the development server:

```bash
$ npm i
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

This Project was deployed to Vercel using [GitHub CLI](https://cli.github.com/) and [Vercel CLI](https://vercel.com/docs/cli)

Check out the docs on how to install [GitHub CLI](https://cli.github.com/) for your OS.

Create an account on [Vercel](https://vercel.com/) and also create a token on the settings tab.

create a vercel workflow file [vercel.yml](./.github/workflows/vercel.yml)

The files sets up the necessary OS and Node environment

- sets the environment variable `$VERCEL_TOKEN` from github secret
- installs [Vercel CLI](https://vercel.com/docs/cli)
- Pull vercel environment info using the TOKEN for a preview
- Build the app
- Deploy a prebuilt to production

To set github secrets run:

```bash
$ gh secret set <VARIABLE_NAME> [optional-flags]

```

push your code to GitHub

> [!WARNING]
> This workflow is currently set to deploy on every push or PR to the `main` branch, you should change that.

To replicate locally using [Vercel CLI](https://vercel.com/docs/cli)

```bash
$ npm i -g vercel@latest
$ export VERCEL_TOKEN=<token-created-on-vercel>
$ vercel pull --yes --environment=production --token=$VERCEL_TOKEN
$ vercel build --prod --token=$VERCEL_TOKEN
$ vercel deploy --prebuilt  --token=$VERCEL_TOKEN
```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
