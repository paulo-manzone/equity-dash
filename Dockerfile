FROM node:latest as angular

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/equity-dash  /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf