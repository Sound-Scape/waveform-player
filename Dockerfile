FROM node:7.4-with-git-alpine 

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install && apk update && apk upgrade && apk add --no-cache bash git openssh

EXPOSE 3003

CMD ["npm", "run", "docker-build"]