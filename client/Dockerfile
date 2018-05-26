FROM node:8.9.0

WORKDIR /var/node/challenge/client

COPY . /var/node/challenge/client

ENV PORT=8080

RUN npm install && npm run build

CMD ["npm", "start"]
