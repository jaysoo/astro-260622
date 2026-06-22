# Nx Astro Starlight Template

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A production-ready documentation site starter built with [Astro Starlight](https://starlight.astro.build/) and [Nx](https://nx.dev) - for teams who want beautiful docs without rebuilding from scratch.
## Finish your Nx platform setup

🚀 [Finish setting up your workspace](https://staging.nx.app/connect/35edETU8ZQ) to get faster builds with remote caching, distributed task execution, and self-healing CI. [Learn more about Nx Cloud](https://nx.dev/ci/intro/why-nx-cloud).

## Quick Start

### Use this template

```bash
npx create-nx-workspace@latest my-workspace \
  --template nrwl/astro-starlight-template \
  --packageManager=npm
```

### Or scaffold from scratch

```bash
npx create-nx-workspace@latest my-docs \
  --preset=apps \
  --packageManager=npm
```

### Dev server

```bash
npx nx run docs:dev
```

Open [http://localhost:4321](http://localhost:4321).

### Production build

```bash
npx nx run docs:build
```

Output lands in `apps/docs/dist/`.

### Build everything in the workspace

```bash
npx nx run-many -t build
```

### Run affected builds only

```bash
npx nx affected -t build
```

Nx rebuilds only the projects that changed since your last commit.

### Explore the project graph

```bash
npx nx graph
```

---

## What's inside

```
astro-starlight-template/
|- apps/
|  |- docs/          # Astro Starlight documentation site
|
|- packages/
   |- ui-components/ # Shared TypeScript utilities (slugify, formatDate, readingTime)
```

### apps/docs

- Astro + Starlight with full-text search, dark mode, and i18n support
- Configured sidebar with Getting Started, Nx Features, and Reference sections
- Tagged `type:app` and `scope:docs` for module boundary enforcement
- Build output cached by Nx - subsequent builds are instant when sources haven't changed

### packages/ui-components

A shared TypeScript library available to any app in the workspace:

```ts
import {
  slugify,
  formatDate,
  readingTime,
  sortedSidebar,
} from '@astro-starlight-template/ui-components';

slugify('My Great Page');         // -> "my-great-page"
formatDate('2024-06-01');         // -> "June 1, 2024"
readingTime('word '.repeat(600)); // -> 3
```

Tagged `type:lib` and `scope:shared` - usable across all apps and libs.

---

## Featured Nx capabilities

### Build caching

Every target (`build`, `typecheck`, etc.) is cached by its inputs. Change a single
content file and only that page re-renders. Your CI pipeline restores the same cache
that your laptop already built.

### Affected commands

```bash
npx nx affected -t build     # only build what changed
npx nx affected -t typecheck
```

Nx computes the dependency graph and skips everything untouched.

### Module boundaries

Projects carry `tags` in `project.json`. Add `@nx/enforce-module-boundaries` to
your ESLint config to prevent `scope:docs` code from importing `scope:private` libs,
keeping your architecture honest as the workspace grows.

### Plugin ecosystem

Add more capabilities without manual config:

```bash
npx nx add @nx/react      # React components
npx nx add @nx/storybook  # Component stories
npx nx add @nx/cypress    # E2E testing
```

Each `nx add` command installs and wires the plugin at the correct version automatically.

---

## Nx Cloud

[Nx Cloud](https://cloud.nx.app) turns this local template into a team-scale platform.

| Feature | What it does |
| ------- | ------------ |
| Remote cache | Share build/test results across every dev machine and CI runner |
| Distributed task execution (DTE) | Split long pipelines across many agents, stream results back |
| Flaky task detection | Automatically quarantine flaky tests so they don't block PRs |
| Self-healing CI | Retry only the failed tasks, not the entire pipeline |

Enable it:

```bash
npx nx connect
```

Full CI guide: [https://nx.dev/ci](https://nx.dev/ci)

---

## Project structure reference

| Path | Purpose |
| ---- | ------- |
| `apps/docs/` | Astro Starlight site |
| `apps/docs/src/content/docs/` | Markdown and MDX content |
| `apps/docs/astro.config.mjs` | Starlight sidebar and site config |
| `packages/ui-components/src/` | Shared TypeScript utilities |
| `nx.json` | Nx workspace config, cache settings, target defaults |
| `package.json` | npm workspaces root |

---

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 🔗 Learn More

- [Nx Documentation](https://nx.dev)
- [Crafting Your Workspace Tutorial](https://nx.dev/docs/getting-started/tutorials/crafting-your-workspace)
- [Module Boundaries](https://nx.dev/features/enforce-module-boundaries)
- [Astro Starlight Documentation](https://starlight.astro.build/)
- [Nx Cloud](https://nx.dev/ci/intro/why-nx-cloud)

## 💬 Community

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [Blog](https://nx.dev/blog)
