FROM node:18.12.1 as client

WORKDIR /app/client

COPY client /app/client

RUN npm install

RUN npm build

FROM node:18.12.1 as server

WORKDIR /app

COPY server /app

RUN npm install

COPY /app/client/build /app/client

EXPOSE 8080

CMD ["npm", "start"]


