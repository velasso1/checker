FROM node:18.12.1

WORKDIR /app/server

COPY . /app/server

RUN npm install

WORKDIR /app/server

EXPOSE 8080

CMD ["npm", "start"]

