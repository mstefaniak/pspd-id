FROM node:14.17 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/build /etc/nginx/html
EXPOSE 8081
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 8081;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]