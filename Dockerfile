FROM node:20-alpine

WORKDIR /usr/src/smarties

COPY ./package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "start" ]