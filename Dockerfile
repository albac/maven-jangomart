FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY server.js .

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "start"]
