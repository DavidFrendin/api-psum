# Installation
> API-psum is not intended for local installation at this point - as database content and possibly some configuration is missing. This will be added further on.

Use the package manager [npm](https://nodejs.org/en/) to install dependencies and nodemon to serve a local instance.

```bash
npm install
npm install nodemon -g
nodemon app/index.js
```

## .env
Environmental parameters such as mongodb connection string is passed through the .env file you need to create at the projects root folder:
```
PORT=80
CONNECTIONSTRING={{your connection string}}
```

## Deploy
A procfile is available in the root directory for deployment at [herku](https://www.heroku.com/).

## Database
API-psum uses mongodb and mongoose for database storage.

The database schema and data is unfortunately not available at this moment - you'll have to figure out the schema and populate the database with content on your own.
