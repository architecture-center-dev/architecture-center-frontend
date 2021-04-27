FROM node:14.16.0-alpine3.10

COPY . /usr/src/app

WORKDIR /usr/src/app

expose 3000

RUN npm install --production && npm run build

CMD ["npm","run", "start"]