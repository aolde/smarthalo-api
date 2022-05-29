FROM node:16-alpine as builder

WORKDIR /app
COPY package.json yarn.lock tsconfig.json nodemon.json ./
COPY src ./src
RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
