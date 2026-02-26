# 🚀 Turborepo Starter with shadcn/ui

Modern Turborepo monorepo with shadcn/ui pre-configured.Clean architecture. Scalable structure. Full TypeScript support.

> ⚠️ This project uses **pnpm** as package manager.

---

## 📦 Tech Stack

- Next.js
- React 19
- TypeScript
- TailwindCSS v4
- Turborepo
- shadcn/ui
- ESLint
- Prettier

---

# 📁 Project Structure

apps/
  docs/                → Next.js application

packages/
  ui/                  → Shared UI components (shadcn + custom)
  share/               → Shared business logic
  hooks/               → Reusable React hooks
  utils/               → Utility functions (date, query, helpers)
  types/               → Shared TypeScript types
  constants/           → Global constants
  eslint-config/       → Shared ESLint config
  typescript-config/   → Shared tsconfig

All packages are 100% TypeScript.

---

# ⚙️ Getting Started

## 1️⃣ Clone repository

git clone https://github.com/drcoder71/.git

## 2️⃣ Install dependencies

cd turborepo-shadcn-ui
pnpm install

---

# 🧩 Add UI Components

Use built-in script:

pnpm ui add `<component-name>`

Works same as shadcn/ui CLI.

---

# 🆕 Add New App

Create new app:

pnpm turbo gen workspace --name `<app-name>`

Copy existing app:

pnpm turbo gen workspace --name `<app-name>` --copy

After copying:

pnpm install

---

# 🛠 Development

Run all apps:

pnpm dev

Build all apps:

pnpm build

---

# 🧠 Architecture Principles

- Clean folder structure
- Separation of concerns
- Shared reusable logic
- Type-safe modules
- Scalable monorepo design

---

# ☁ Remote Caching (Optional)

Turborepo supports Remote Cache for faster builds.

By default → local cache only.

Enable remote cache:

npx turbo login

Link project:

npx turbo link

Now build cache is shared across team and CI/CD.

---

# 📚 Useful Links

Turborepo Docs
https://turbo.build/repo/docs

shadcn/ui Docs
https://ui.shadcn.com/docs

---

# 🎯 Goal

Production-ready monorepo starter.
Fast. Clean. Maintainable.
