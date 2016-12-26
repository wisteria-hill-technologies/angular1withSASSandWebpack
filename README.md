# Angular1, Expressjs, SASS, Bootstrap with Webpack and Heroku setup



This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article.



## Running server for development
```npm run dev```

- hot reloading for front end, back end, and sass
* Note: Pages do not reload when html pages are modified.  Please reload manually.

## Build the production code
```npm run build```

## Run production
```npm start```

## Deploying to Heroku

```
$ heroku create <app name>
$ git push heroku master
$ heroku open
```
Important:<br>
To make the mailer in the contact form to work from your local environment, you will need to set .env file.
In .env file, specify your email address, password,etc.
For Heroku, you will also need to set them in Heroku website.
