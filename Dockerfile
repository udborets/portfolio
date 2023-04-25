FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm build

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]