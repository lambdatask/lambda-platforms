const net = require('net')
const lambda = require('./lambda')

const server = net.createServer((socket) => {
  const result = lambda()
  socket.end(result + '\n')
})

server.listen('8888', () => {
  console.log('event source server started at 0.0.0.0:8888')
})
