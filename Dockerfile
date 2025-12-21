FROM node:24.12.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

# COPY . . # no need of copy, we will mount volumne inside container.

EXPOSE 5173
CMD ["npm", "run", "dev"]