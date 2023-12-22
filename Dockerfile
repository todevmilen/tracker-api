# stage 1 building code
FROM node:alpine as builder
WORKDIR /home/todev/Desktop/tracker-api/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2 running code
from node:alpine
WORKDIR /home/todev/Desktop/tracker-api/
COPY package*.json ./
ENV TZ=Europe/Sofia
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install --production


COPY  --from=builder /home/todev/Desktop/AITsoft_GPS/dist ./dist
# Copy .env file
COPY .env .

# Set NODE_ENV to production
ENV NODE_ENV=production

EXPOSE 3010

CMD ["node", "dist/src/server.js"]
