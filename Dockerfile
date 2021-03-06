FROM node:16 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --force
RUN npm install react-scripts@4.0.3 -g --silent
COPY . /usr/src/app
COPY . ./
EXPOSE 3000
CMD [ "npm" , "run" , "start" ]
