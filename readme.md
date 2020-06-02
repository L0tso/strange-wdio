## steps to reproduce
- `npm i`
- `npm run test` -> 2 green tests
- `docker-compose up -d`
- `npm run test:hub` -> error `webdriver.io page "after each" hook browser.clearLocalStorage is not a function`