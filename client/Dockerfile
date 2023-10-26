FROM node:18.12.1

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

WORKDIR /app

EXPOSE 8080

CMD ["npm", "start"]


