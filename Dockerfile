FROM node:10

workdir /app

copy . /app

expose 3000

run yarn install

CMD [ "yarn", "start:dev" ]

