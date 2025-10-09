# @carauktion/component-library

A typed React component library built with Vite. Ships ESM/CJS and type definitions.

## Local development

```bash
yarn install

# Storybook for local development
yarn dev  # http://localhost:6006

# Build the library
yarn build
```

## Commit & push

- A git pre-commit hook automatically builds the library and adds `dist/` to the commit.
- If the build fails, the commit is aborted.

```bash
git add .
git commit -m "Your message"
git push
```

## Consuming in apps

Install directly from GitHub:

```bash
yarn add github:Carauktion/components-library
```

Import components and the bundled CSS in your app:

```tsx
import { Button, DatePicker, Modal, Table } from '@carauktion/component-library'
import '@carauktion/component-library/dist/style.css'
```

Ensure Tailwind scans the library output (if your app uses Tailwind):

```js
// tailwind.config.js or tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@carauktion/component-library/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { extend: {} },
  plugins: []
}
```

## Versioning & Release

This repo uses Changesets for managed, semver-based versioning. Versions are not bumped automatically — you decide when and how to release.

1) Record changes you want to release

```bash
yarn changeset
```

- Pick the version type (patch/minor/major)
- Write a short description

2) Apply pending changesets and update versions/changelogs

```bash
yarn version-packages
```

3) Publish the new version

```bash
yarn release
```

Helpful commands

```bash
# Preview status of unreleased changes
yarn changeset status

# Create an empty changeset (then edit the generated file)
yarn changeset add --empty

# Optional: create snapshot prerelease versions
yarn version:patch
yarn version:minor
yarn version:major
```

## Notes

- Node 22+, Yarn required.
- The `dist/` folder is tracked to allow installation from GitHub without a local build.
