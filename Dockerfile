FROM node

RUN npm install -g npm@8.5.5

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . /app

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]