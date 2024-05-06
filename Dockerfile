FROM node:latest AS runtime
WORKDIR /app

COPY . .

ENV ASTRO_DATABASE_FILE=/data/astro.db

RUN mkdir -p /data

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs --verbose


