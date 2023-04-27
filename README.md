## Запуск проекта
```
npm install - Устанавливает зависимости
npm run start - Запускает front
npm run start:server - Запускает json-server на 3001 порту
npm run dockerize - Cоздаётся docker image c именем ugmk_test_app
npm run start-container - Запускает контейнер с именем ugmk_test_app
```

## Конфигурация проекта
Для разработки проект содержит конфиг:
vite - vite.config.ts

Изменить порт можно в файле vite.config.ts:
```typescript js
  server: {
    port: 3000
  }
```

В основе работы проекта лежит хук useSWR - [useSWR](https://swr.vercel.app/ru)
