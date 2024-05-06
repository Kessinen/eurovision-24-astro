FROM node:lts AS runtime
WORKDIR /app

copy . .

RUN npm install

CMD ["npm", "run", "dev"]