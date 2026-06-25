# @wolvlabs/eslint-config

Shared [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files) for wolvlabs projects - TypeScript-first, formatting delegated to Prettier.

Built on ESLint 9, `typescript-eslint` v8, and the modern React plugins. Ships three presets: `base`, `browser`, and `react`.

## Requirements

- ESLint **9+** (flat config)
- Node **18+**

## Installation

```bash
pnpm add -D eslint @wolvlabs/eslint-config
```

`eslint` is a peer dependency; all plugins (`typescript-eslint`, `eslint-plugin-react-hooks`, …) come bundled with this package.

## Presets

| Import                            | Use for                                | Adds on top of `base`                       |
| --------------------------------- | -------------------------------------- | ------------------------------------------- |
| `@wolvlabs/eslint-config/base`    | Node libraries, TS packages            | -                                           |
| `@wolvlabs/eslint-config/browser` | Vanilla-TS browser code (e.g. widgets) | browser globals for `src/**`                |
| `@wolvlabs/eslint-config/react`   | React + Vite apps                      | react-hooks, react-refresh (Vite), jsx-a11y |

Each preset is an array of flat-config objects - spread it into your config and add your own `ignores`/overrides.

## Usage

Create an `eslint.config.js` (ESM) in your project root.

**Node / TS library**

```js
import base from "@wolvlabs/eslint-config/base";

export default [{ ignores: ["dist"] }, ...base];
```

**Browser (vanilla TS)**

```js
import browser from "@wolvlabs/eslint-config/browser";

export default [{ ignores: ["dist"] }, ...browser];
```

**React + Vite**

```js
import react from "@wolvlabs/eslint-config/react";

export default [{ ignores: ["dist", "wailsjs"] }, ...react];
```

Add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## What's included

**`base`**

- `@eslint/js` recommended
- `typescript-eslint` recommended
- `no-unused-vars` - ignores identifiers prefixed with `_`
- `@typescript-eslint/no-shadow` (with `ignoreTypeValueShadow`)
- `@typescript-eslint/naming-convention` - `camelCase` / `PascalCase` / `UPPER_CASE`; types `PascalCase`; object properties unrestricted
- Node globals (also covers config files like `vite.config.ts`)

**`browser`** - adds browser globals, scoped to `src/**`.

**`react`** - adds:

- `eslint-plugin-react-hooks` (recommended-latest)
- `eslint-plugin-react-refresh` (Vite preset)
- `eslint-plugin-jsx-a11y` (recommended)

## Formatting

Formatting is handled by @wolvlabs/prettier-config. The two run side by side - no eslint-config-prettier needed (this config has no style rules).

## Type-checked linting (optional)

For type-aware rules (e.g. floating promises), extend with `typescript-eslint`'s type-checked config in your project and point it at your `tsconfig`. Slower, but catches more. See the [typescript-eslint docs](https://typescript-eslint.io/getting-started/typed-linting/).

## License

MIT © André Leifeld
