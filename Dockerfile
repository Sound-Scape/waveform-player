FROM node:7.4-with-git-alpine 

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install && yum install -y git

EXPOSE 3003

CMD ["npm", "run", "docker-build"]