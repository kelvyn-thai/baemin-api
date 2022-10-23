## What is this project?

- This project using for create order tracking service.
- API Restful
- Link: https://baemin-api.herokuapp.com/
- Copyright Thai Nguyen Hoang Phat

## Available scripts

In the project directory, you can run:

| Command     |        Description        |       ENV        |
| :---------- | :-----------------------: | :--------------: |
| npm install |       Install NPM.        |
| npm         | Runs the app on port 3000 | .env.development |

## How to run this project?

- Copy .env.development -> .env
- Run cmd npm start to start app on port 3000

## Main Stack

- Build REST api by express / node

## Deploy

- [Heroku](https://dashboard.heroku.com/apps/baemin-apis)

## Production

- https://phattnh.github.io/baemin-fe/

## Developer

- From source ([src](./src/)) app folder:

  - [authen](./src/authen/): apis for authenticate
  - [category](./src/category/): apis categories (fast-food, drinks, ...)
  - [merchant](./src/merchant/): apis merchants by category (kfc, phuc long,...)
  - [order](./src/hooks/): apis orders
  - [item](./src/item/): apis items of a merchant
  - [configs](./src/configs/): some basic project
