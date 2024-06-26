## Tech Stack

Vite: Ultra-fast bundler for lightning-quick development experience.

React: Popular JavaScript library for building user interfaces.

TypeScript: Superset of JavaScript for static type checking.



## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm install
```

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.




Project Structure

```bash

your-project-name/
├── public/           # Static assets (HTML, CSS, images, etc.)
├── src/              # Application source code
│   ├── main.tsx        # Main application component
│   ├── components/    # Reusable components
│   │   └── ...
│   ├── styles/        # Global or component-specific styles
│   │   └── ...
│   └── pages/         # views and pages
│       └── ...
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── ...
```             # Other configuration files (optional)
