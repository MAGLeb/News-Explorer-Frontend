# Frontend for news-explorer.
Сервер реализованный на Node + MondoDB можно посмотреть [тут](https://github.com/MAGLeb/News-API)

https://news-discoverer.ml
(Хостинг действителен до 20.05.2020)

https://magleb.github.io/News-Explorer-Frontend/about/

Реализованы:
- верстка трех страниц согласно макету
- адаптивная верстка для всех разрешений
- настроен Webpack и линтер
- сделан слайдер Flickify с использованием API github
- настроена работа с публичным API-news
- сделано меню для mobile
- сверстаны 3 popup (открываются по добавлению классу "popup_is-opened")

## Локально установить
Установите:
1. Клонируйте репозиторий
2. Выполните `npm install` для установки необходимых пакетов

Запустите:
- `nmp run dev` -- запуск в режиме разработки
- `npm run build` -- компиляция продакшен версии
- `npm run deploy` -- загрузка на хостинг
- `nmp run pages` -- загрузка на gh-pages проекта
