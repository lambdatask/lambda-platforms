FROM node:slim

WORKDIR /usr/src/app

COPY baseapp/* /usr/src/app/

RUN npm install

CMD ["./index.js"]

ENTRYPOINT ["node"]

EXPOSE 8888




