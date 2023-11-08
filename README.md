# A Fashion retail project

This project is created with templating from @Vue official release.

Below functionalities are enabled

  - Vue
  - Typescript
  - Pinia
  - Vitest

## Local development

The application requires a mock-api to get going with [dummy data](./mockoon/data.json) downloaded from the API.

Download and install the desktop mock API program Mockoon from https://mockoon.com/download/

The data file [data.json](./mockoon/data.json) is exported from a running mockoon environment. So there is no need to configure the application to get started.

Run below commands to run the application.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

If you see CORS error while accessing the page, please follow the [documentation](https://mockoon.com/docs/latest/server-configuration/cors/) to disable it in dev env and allow

`Access-Control-Allow-Origin: *` in the Headers in Mockoon settings

### Tests

```sh
npm run test:unit
```

## Docker

ToDo
