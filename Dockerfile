FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install --save --legacy-peer-deps
RUN npm install react-scripts@4.0.3 -g
COPY . ./
EXPOSE 3000
CMD ["npm ","start"];
