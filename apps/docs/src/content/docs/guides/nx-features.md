---
title: Nx Features
description: A tour of the Nx capabilities baked into this template.
sidebar:
  order: 2
---

## Smart caching

Nx caches the output of every target (build, typecheck, etc.) and replays it
when inputs haven't changed. For a docs site this means:

- Re-building after a typo fix restores the entire `dist/` folder from cache
  in milliseconds instead of running the full Astro build.
- CI pipelines benefit automatically - the first build warms the cache and
  subsequent runs are instant.

Enable remote caching with a single command:

```bash
npx nx connect
```

## Affected commands

Run tasks only for projects changed since your last commit:

```bash
npx nx affected -t build
npx nx affected -t typecheck
```

If you add a second docs site or a shared component, only the affected
projects rebuild.

## Module boundary rules

Projects are tagged in their `project.json`:

| Tag | Meaning |
| --- | ------- |
| `type:app` | Deployable application (docs site) |
| `type:lib` | Importable library |
| `scope:docs` | Docs-only code |
| `scope:shared` | Usable by any project |

Enforce boundaries in `.eslintrc.json` (or `eslint.config.mjs`) with
`@nx/enforce-module-boundaries` so app code never leaks into shared libs.

## Project graph

Visualize dependencies between all projects:

```bash
npx nx graph
```

## Nx Cloud distributed task execution

Split long build/test runs across many agents automatically:

```bash
# CI config (GitHub Actions example)
- run: npx nx affected -t build --parallel=3
```

With Nx Cloud agents, each task runs on a separate machine and results
stream back to the initiating machine in real time.

Learn more: [https://nx.dev/ci](https://nx.dev/ci)
