# AccessFlow - SaaS per l'Accessibilità PA

AccessFlow è un SaaS B2B che semplifica la conformità all'accessibilità digitale (Legge Stanca, WCAG 2.1) per le Pubbliche Amministrazioni italiane.

## 🚀 Stato Attuale del Progetto

### Completato:
- **Struttura base:** Inizializzazione monorepo con Turborepo (apps/web).
- **Database:** Definizione dello schema Prisma (User, Ente, Scan, Repot, ecc.) ed ER diagram creato.
- **Infrastruttura Dati Locale:** Setup di Supabase CLI tramite Docker per ambiente PostgreSQL locale isolato (`turbo supabase start`).
- **Backend:** Test della connessione con Prisma e risoluzione compatibilità versione (downgrade Prisma a v6.0.0 per supportare local db push).
- **Autenticazione SSR Server-Side:** Configurazione del client Supabase per Next.js (`@supabase/ssr`) per l'App Router.
- **Frontend Base:** Implementazione delle Server Actions per *Login/Signup* e interfaccia base del Form in `login/page.tsx` con Tailwind CSS.

### In corso / Prossimi Passi (To-Do):
1. **Migliorare la UI:** Rendere la pagina di autenticazione graficamente appagante e accessibile (aria-labels).
2. **Protezione rotte:** Implementazione di un Middleware Next.js per gestire redirect autorizzati (login -> dashboard, unauth -> login).
3. **Estensione Browser:** Setup in `apps/extension` con il framework WXT e integrazione di `axe-core`.

## 🛠 Tecnologie In Uso
- **Frontend:** Next.js 14 (App Router), Tailwind CSS, TypeScript
- **Backend:** Next.js Route Handlers & Server Actions, Prisma ORM (@6.0.0)
- **Database & Auth:** PostgreSQL (Supabase Auth e DB Locale)
- **Tooling:** Turborepo per il monorepo, npm workspaces, Docker (Supabase CLI)
