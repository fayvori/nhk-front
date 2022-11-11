# syntax=docker/dockerfile:1 
# escape=\
FROM node:16 AS build
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.22.1
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY --from=build /app/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
