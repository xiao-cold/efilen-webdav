FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY .env.example ./.env
COPY src ./src

RUN npm install --production

EXPOSE 8888

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8888 || exit 1

CMD ["npm", "start"]