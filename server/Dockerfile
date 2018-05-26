FROM node:8.9.0

WORKDIR /var/node/challenge/server

COPY . /var/node/challenge/server

ENV API_PORT=3000 API_HOST=localhost

RUN npm install && npm run build

CMD ["node", "dist/index.js"]
