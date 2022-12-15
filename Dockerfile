FROM node:18.12.1-alpine
WORKDIR /backend-code
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9096
CMD [ "npm", "start" ]
