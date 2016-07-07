const net = require('net')
const lambda = require('./lambda')

const server = net.createServer((socket) => {
  let result = ''

  socket.on('data', (data) => {
    result += data.toString('utf8')
  })

  socket.on('end', () => {
    const context = JSON.parse(result)
    lambda(context)
  })
})

server.listen('8888', () => {
  console.log('event source server started at 0.0.0.0:8888')
})
