# Monorepo with Lerna to Design System

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a2f69fbed9444b99a2c593d77d7b794c)](https://app.codacy.com/manual/joaowillamy/react-storybook-jest-lerna?utm_source=github.com&utm_medium=referral&utm_content=joaowillamy/react-storybook-jest-lerna&utm_campaign=Badge_Grade_Dashboard)

make with love <3

## See the project working

- 🚀 [[LIVE] - Features](http://features.frontend.quero.s3-website.us-east-2.amazonaws.com/)
- 📝 [[DOCUMENTATION] - Design system](http://designsystem.frontend.quero.s3-website.us-east-2.amazonaws.com/?path=/docs/core-button--primary)

## Important!!!

this project was divided into 2 repositories, one for the design system and another for the implementation of the page with the features.

- 💄 [REPO 1] This one, Design system
  - 🔧 [[NPM] @joaowillamy-test-quero/core](https://www.npmjs.com/package/@joaowillamy-test-quero/core)
  - 🔧 [[NPM] @joaowillamy-test-quero/form](https://www.npmjs.com/package/@joaowillamy-test-quero/form)
  - 🔧 [[NPM] @joaowillamy-test-quero/theme](https://www.npmjs.com/package/@joaowillamy-test-quero/theme)
  - 🔖 [Releases](https://github.com/joaowillamy/react-storybook-jest-lerna/releases)
  - [Pull Request](https://github.com/joaowillamy/react-storybook-jest-lerna)
- [[REPO 2] the features](https://github.com/joaowillamy/front-end-test-quero)
  - [Pull Request](https://github.com/joaowillamy/front-end-test-quero/pulls?q=is%3Apr+is%3Aclosed)
  - [Issues](https://github.com/joaowillamy/front-end-test-quero/issues?q=is%3Aissue+is%3Aclosed)

> A Monorepo with multiple packages and a shared build, test, and release process.

- 🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
- 📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
- 🚀 [React](https://reactjs.org/)  -  JavaScript library for user interfaces
- 💅 [styled-components](https://www.styled-components.com/)  -  CSS in JS elegance
- 🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
- 📖 [Storybook](https://storybook.js.org/) - UI Component Environment
- 🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing

## Usage

- `yarn dev` - This starts Storybook for viewing all the components locally.
- `yarn bootstrap` - This installs all of the packages and links dependent packages together.
- `yarn build` - This babelfies all of the packages and creates `/lib` folders for each one.
- `yarn test` - Run all linting and unit tests before committing.
- `yarn test -o` - Run only the tests that have changed.
- `yarn test -u` - Update all of the snapshot tests.

## Lerna

- `lerna changed` - Show which packages have changed.
- `lerna diff` - Show specifically what files have cause the packages to change.

## Linking

1. Run `yarn build`
1. Run `yarn dev`
1. Change the `package.json` of the consumer from `$YOUR_PACKAGE_NAME` (which lives inside the monorepo) to `file:./../monorepo/packages/$YOUR_PACKAGE_NAME`
1. Run `rm -rf node_modules && yarn` in the consumer
1. 🎉

## Publish

- Run `npm publish --access public` - Make project public
- Run `yarn run lerna-publish` - Send to npm
- Run `yarn deploy-storybook` - Make deploy to S3 of AWS
