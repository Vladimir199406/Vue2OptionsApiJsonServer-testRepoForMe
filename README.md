# modesto-test
Техническое задание

Макет скрыл на всякий случай.
Кроссбраузерность: последние версии современных браузеров (Chrome, Opera, FF, Safari, Microsoft Edge)
Разрешение: десктоп
Реализация: Vue2 + Axios. Вёрстка - HTML5 + SCSS
Логика:
Список вопросов и вариантов ответа необходимо получать с сервера через Axios (в .catch() подгружать json-заглушку).
При входе на сайт открывается попап с опросником в случае, если пользователь ещё не проходил данный опрос.
При нажатии на крестик данный опрос закрывается и больше не показывается пользователю. 
После шага №2 (макет Page 2), если пользователь выбрал первый вариант ответа, его перенаправляет на макет Page 4 (шаг №3, вариант 1). Если же он выбрал второй или третий вариант, то его перенаправляет на макет Page 3 (шаг №3, вариант 2).
На шаге №3 и №5 пользователь может отказаться от ответа, выбрав соответствующий чекбокс.
На шаге №1-№3 и №5 пользователь может выбрать только один вариант ответа. На шаге №4 пользователь может выбрать несколько вариантов ответа, в том числе указать свой собственный.
На шаге №5 при клике на ‘Done’ все заполненные данные отправляются на сервер, а опросник больше не должен показываться

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve 
```

### Json-Server for development (app data GET/POST => ./db.json)
```
npm run db:serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
