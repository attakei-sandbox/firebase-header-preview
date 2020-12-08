# Build server source
FROM node:12-alpine AS build
RUN mkdir -p /app/src
COPY src/ /app/src/
COPY package.json tsconfig.json yarn.lock /app/
WORKDIR /app
RUN yarn install && yarn build

FROM node:12-alpine
RUN mkdir -p /app/dist
COPY --from=build /app/dist /app/dist/
COPY package.json tsconfig.json yarn.lock /app/
WORKDIR /app
RUN yarn install --production
CMD ["node", "dist/server.js"]
