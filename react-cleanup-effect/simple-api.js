const http = require('http')

const jsonData = JSON.stringify({
  users: [
    { id: 1, name: 'Alice', age: 12 },
    { id: 2, name: 'Bob', age: 21 },
    { id: 3, name: 'Canary', age: 31 },
  ]
})

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.end(jsonData)
  }, 5000)
})

server.listen(3080, console.error)
