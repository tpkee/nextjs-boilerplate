# nextjs-boilerplate

### Credits
Based on ixartz's [Next-js-boilerplate](https://github.com/ixartz/Next-js-Boilerplate)

### Why this fork?
The original boilerplate was designed for full-stack applications. While the original template is well-crafted, it is strongly opinionated in the packages it offers (ie. auth, logging etc.). This fork aims to offer a flexible alternative that doesn't rely on third-party online services.

### Features
Developer experience first, extremely flexible code structure and only keep what you need:

- [Next.js](https://nextjs.org) with App Router support
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Strict Mode for TypeScript and React 18
- Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/)
- Type-safe environment variables with T3 Env
- Form with React Hook From
- Validation library with Zod
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
  Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Lint git commit with Commitlint
- Write standard compliant commit messages with Commitizen
- Integration and E2E Testing with Playwright
- Run tests on pull request with GitHub Actions
- Storybook for UI development
- Logging with Pino.js
- Automatic changelog generation with Semantic Release
- Visual testing with Percy (Optional)
- Absolute Imports using `@` prefix
- VSCode configuration: Debug, Settings, Tasks and Extensions
- SEO metadata, JSON-LD and Open Graph tags
- Sitemap.xml and robots.txt with next-sitemap
- [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Project structure

```shell
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── css                         # Css folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas for zod
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/tpkee/nextjs-boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Useful commands

#### Bundle Analyzer

NextJS Boilerplate comes with a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
npm run build-stats
```

By running the command, it'll automatically open a new browser window with the results.


If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.
