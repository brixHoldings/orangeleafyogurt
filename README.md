## Requirements Check List

1. Ensure your editor can run EditorConfig. [Check the list of available plugins](https://editorconfig.org/#download).
2. Ensure your editor can run Eslint. Check the references for [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html) and [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
3. Ensure your editor can run Prettier. Check the references for [WebStorm](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_apply_code_style) and [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
4. Ensure you are running the LTS 16 version of node.

---

## Getting Started

1. Install required dependencies `npm i`.

---

## Commits And Branching

Please read the following as our commit structure follows the [conventional commits](https://www.conventionalcommits.org/) philosophy.

Keep your commits small and to the point.

Our flow is trunk based with short lived branches.

---

Before submitting your code for review ensure that the following is met:

Backend and Frontend

- Code adheres to the set standards
- Acceptance criteria / scenarios are fulfilled
- All tests are in place
  - Scenario test cases
  - Unit tests
  - Integration tests
  - E2E tests

Frontend

- UI/UX is fine
  - Device / browser test is done successfully
- SEO optimisation has been done
- The feature is accessible
  - Image alt texts are meaningful
  - The feature can be used using keyboard navigation
  - The feature can be used using screen readers
