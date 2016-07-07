FROM node:slim

WORKDIR /usr/src/app

COPY baseapp/* /usr/src/app/

CMD ["./index.js"]

ENTRYPOINT ["node"]

EXPOSE 8888




