# syntax=docker/dockerfile:1 
# escape=\
FROM node:16 AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.22.1
COPY --from=build /app/dist/ /usr/share/nginx/html
