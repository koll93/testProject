# AngularTest

Тестовый проект. Необходимо реализовать любую из 2х страниц на выбор. [Макет тут](https://www.figma.com/file/V5e56vdP96kYAHSAyetovT/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-(Frontend))

## Fake Backend

Мок бекенда реализован с помощю [json-server](https://github.com/typicode/json-server). Для старта `npm run backend`. Бекенд будет доступен на [http://localhost:3000](http://localhost:3000) 

Для страницы профиля пользователя api:
* таба информации доступно по урлу [http://localhost:3000/profile](http://localhost:3000/profile)
* таба ролей доступно по урлу [http://localhost:3000/userroles](http://localhost:3000/userroles)

Для страницы ролей api:
* список ролей [http://localhost:3000/roles](http://localhost:3000/roles)
* таб деталей аудита роли [http://localhost:3000/audit](http://localhost:3000/audit)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
