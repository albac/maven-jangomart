FROM node

WORKDIR /usr/src/app

COPY package-pg.json package.json

RUN npm install

COPY server.js .

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "start"]
