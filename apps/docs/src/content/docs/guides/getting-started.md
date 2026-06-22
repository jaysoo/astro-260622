---
title: Getting Started
description: How to use the Nx Astro Starlight template in your own project.
sidebar:
  order: 1
---

## Prerequisites

- Node.js 20 or later
- npm 10 or later

## Create your workspace

```bash
npx create-nx-workspace@latest my-docs \
  --template nrwl/astro-starlight-template \
  --packageManager=npm
```

Or clone this template directly:

```bash
npx create-nx-workspace@latest my-docs --preset=apps --packageManager=npm
```

## Start the dev server

```bash
npx nx dev docs
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build for production

```bash
npx nx build docs
```

The output is written to `apps/docs/dist/`.

## Preview the production build

```bash
npx nx preview docs
```

## Run all builds in the workspace

```bash
npx nx run-many -t build
```

## Explore the project graph

```bash
npx nx graph
```

This opens an interactive visualization of all projects and their dependencies.

## Using the shared component library

The `@astro-starlight-template/ui-components` library provides utility
helpers you can import in any MDX page or Astro component:

```ts
import {
  slugify,
  formatDate,
  readingTime,
  sortedSidebar,
} from '@astro-starlight-template/ui-components';

const slug = slugify('My Awesome Page');       // -> "my-awesome-page"
const date = formatDate('2024-01-15');          // -> "January 15, 2024"
const mins = readingTime('word '.repeat(400));  // -> 2
```

## Connect to Nx Cloud

Enable remote caching and distributed task execution in one step:

```bash
npx nx connect
```

After connecting, every `nx build` result is cached remotely. Your teammates
and CI pipelines share the same cache - no rebuilding what has already been built.

See [https://cloud.nx.app](https://cloud.nx.app) for the full Nx Cloud dashboard.
