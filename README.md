# "Ozon Search Test Automation" (Временно LALAFO.KG ПОСКОЛЬКУ ВЫХОДИТ ОШИБКА ПРИ ЗАХОЖДЕНИИ НА САЙТ)

## Description 
This project is designed to automate the testing of the search functionality on the Ozon website using the Playwright library with TypeScript. The main objectives are to verify the accuracy of product search results and the proper application of price filters.

## What is implemented in the project:
- Automated tests for product search by name and application of price filtering
- Page Object Model (POM) for organized and maintainable test structure
- Integration with Playwright for automated interaction with the website

## Testing website
[ozon.ru](https://ozon.ru)

## Programming language
The project is implemented using TypeScript and Playwright.

## Installation
1. Install Node.js
    ```
    npm install
    ```
2. Install Playwright

    ```
    npm init playwright@latest
    ```
    

## Run tests and reports
- For running test should be used next command

    ```
    npx playwright test
    ```
- For runnig reports should be used next command

    ```
    npx playwright show-report
    ```

## Structure of project

```
/automated-tests_fix_it
├── /enviroments             # Auto test searchbox and filter
├── /node_modules            # Project dependencies installed via npm
├── /pages                   # Page Object Model (POM) folder
│   ├── OrgAccount.page.ts       # Page model for search functionality 
│   ├── README.md            # Changed README.md and renamed files
│
├── /tests                   # Folder containing tests
│   ├── APISHKA              # Add/Update API test files in APISHKA
│   │   ├── postman-snippet.js
│   │   ├── searchbox.ts     # Searchbox test with filters
│   │   └── searchbox-with-filters.spec.ts
│   ├── Postman collections  # Add newman and postman collections
│   ├── UI TESTS             # API auto tests for UI
│   │   ├── product_filter_validation.spec.ts
│
├── /tests-examples          # POM add and updated README.md
│   ├── demo-todo-app.spec.ts
│   ├── example.spec.ts
│
├── /test-results            # Folder for test results
├── /playwright-report       # Playwright report folder
│
├── .gitignore               # File specifying ignored files in git
├── package-lock.json        # File listing project dependencies
├── package.json             # Project configuration and dependencies
├── playwright.config.ts     # Playwright configuration for auto tests of search and filter
├── README.md                # Updated README.md with project information

```
## Test cases

## Test Cases

| Test Name           | Reproduction Steps                                              | Expected Result                                  | Actual Result                                  |
|---------------------|-----------------------------------------------------------------|--------------------------------------------------|------------------------------------------------|
| Search Product      | 1. Open the Ozon website.                                      | The homepage opens.                              | The homepage opens.                            |
|                     | 2. Click the "Search" button.                                  | A search field appears.                          | A search field appears.                        |
|                     | 3. Enter "laptop" in the search field and press "Enter".       | Search results are displayed on the page.        | Search results are displayed on the page.      |
| Price Filtering     | 1. Enter "laptop" in the search field.                         | The product "laptop" is found on the site.       | The product "laptop" is found on the site.     |
|                     | 2. Set the price range (e.g., from 30000 to 50000) and click "Filter". | Products within the specified range are shown.  | Products outside the specified range are shown.|

## Links to test cases
- /tests/search.spec.ts – Tests related to search functionality and price filtering on Ozon
