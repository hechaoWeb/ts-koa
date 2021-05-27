FROM node:10.14.2
USER root
ENV NODE_ENV=test
RUN mkdir -p /opt/ts-koa/dist
COPY . /opt/ts-koa
WORKDIR /opt/ts-koa
RUN npm i
EXPOSE 3003
CMD node dist/index.js