ARG VERSION=18-alpine

FROM node:$VERSION

ARG SERVER_PORT=5000

ENV PORT=$SERVER_PORT

# RUN mkdir server

RUN ["mkdir", "server"]

WORKDIR /server

COPY . .

RUN ["npm", "install"]

EXPOSE $SERVER_PORT

ENTRYPOINT [ "node" ]

CMD ["--help"]

# CMD npm start

# CMD ["npm", "start"]