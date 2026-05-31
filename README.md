![Playwright Tests](https://github.com/Maansee/orangehrm-playwright/actions/workflows/playwright.yml/badge.svg)

# OrangeHRM Playwright Automation

Automation framework for OrangeHRM using Playwright and Page Object Model.

## Tech Stack
- Playwright
- JavaScript
- Page Object Model (POM)

## Two Locator Approaches
This project intentionally demonstrates two valid POM locator strategies:

**Approach A — Separate locators file (Login module)**
Locators stored in a dedicated file, imported into the page class.
Best for large teams where locators change frequently.

**Approach B — Locators inside page class (PIM module)**
Playwright semantic locators written directly inside the page class.
Cleaner, more readable, Playwright recommended.

## Installation
npm install
npx playwright install chromium

## Run Tests
npm test                          # run all tests
npm run test:login                # run login tests only
npm run test:pim                  # run PIM tests only
npm run report                    # open HTML report

## Test Coverage
| Module | Test ID | Scenario |
|---|---|---|
| Login | TC_LGN_01 | Valid login navigates to dashboard |
| Login | TC_LGN_02 | Invalid credentials shows error |
| Login | TC_LGN_03 | Empty fields shows required validation |
| PIM | TC_PIM_01 | Add employee navigates to correct page |
| PIM | TC_PIM_02 | Add employee with valid details shows success |
| PIM | TC_PIM_03 | PIM page loads employee list |

## Key Design Decisions
- **Fixtures over beforeEach** — reusable setup across all test files
- **Constants file** — no hardcoded credentials or URLs in tests
- **Unique test data** — `generateEmployeeName()` prevents duplicate conflicts
- **Retry on failure** — configured in playwright.config.js
- **Screenshots + Trace** — auto-captured on test failure