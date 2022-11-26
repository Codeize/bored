# Bored

Bored is a message board application written in Vite and React with a Supabase backend.

It's adapted from [Fireship's course on Supabase](https://fireship.io/courses/supabase/).

## Getting Started

1. Clone the repo

```bash
git clone https://github.com/Codeize/bored
```

2. Install dependencies

```bash
yarn
```

3. [Create a Supabase project and get your API keys](https://supabase.io/)

4. Create a `.env.local` file in the root of the project and add your API keys

```bash
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anonymous-key>
```

5. Start the development server

```bash
yarn dev
```

## Deploying

1. [Create a Supabase project and get your API keys](https://supabase.io/)

2. Create a `.env.production` file in the root of the project and add your API keys

```bash
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anonymous-key>
```

3. Build the project

```bash
yarn build
```

4. Deploy the project to Vercel

```bash
vercel
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Fireship](https://fireship.io/)
- [Zack DeRose](https://twitter.com/zackderose)
