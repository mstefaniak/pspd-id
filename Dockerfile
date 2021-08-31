FROM node:14.17 as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
COPY --from=build-deps /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]