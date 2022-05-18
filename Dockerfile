FROM node:16.13.0

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
RUN npm install react-scripts -g
RUN npm install

COPY . .

RUN npm run build

COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]
