FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install --include=optional --legacy-peer-deps \
  && npm install --platform=linux --arch=x64 sharp
COPY . .
EXPOSE 5000
CMD ["npm", "start"]