FROM node:16
WORKDIR /app
COPY package*.json ./
ADD package.json /app/package.json
RUN npm install --force
RUN npm install react-scripts@4.0.3 -g
COPY . .
EXPOSE 3000
CMD ["npm ","start"];
