# Supabase setup

This project has Supabase browser/server clients and Next.js 16 session refresh wired up. The example page at `/todos` reads `id` and `name` from a `todos` table.

## Run the example

1. The Supabase packages are installed: `@supabase/supabase-js` and `@supabase/ssr`.
2. `.env.local` is in the project root with the Project URL and Publishable key. It is ignored by Git.
3. If your project does not already have a `public.todos` table with `id` and `name` columns, create it in the Supabase SQL Editor and add sample rows. Give only the roles that need access the required table grants and RLS policies.
4. If the table is not available through the Data API, expose it under **Integrations → Data API** in the Supabase dashboard and make sure the appropriate role has access.
5. Restart the dev server with `npm run dev` and open [http://localhost:3000/todos](http://localhost:3000/todos).

The existing TeamX marketing page remains at `/`. Use the browser helper in Client Components, the server helper in Server Components/Route Handlers, and the root `proxy.ts` to refresh Auth sessions. The `proxy.ts` filename follows this project's Next.js 16 version; Next.js renamed Middleware to Proxy in v16.

This project now builds as a Next.js server app because cookie-based Supabase SSR and session refresh require a server runtime. Deploy it to a host that supports Next.js server rendering; static-only hosting/export is no longer enabled.

The configured key is a publishable key. Never substitute a Supabase secret or `service_role` key into either `NEXT_PUBLIC_` variable.
