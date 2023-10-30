FROM node:18.12.1

WORKDIR /app/client

COPY . /app/client

RUN npm install

RUN npm run build

WORKDIR /app/client

EXPOSE 3000

CMD ["npm", "start"]





