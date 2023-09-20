const http=require('http')
const PORT=5000

http.createServer((request,response)=>{
    response.end('<h1>Welcome from server</h1>')
}).listen(PORT)

console.log(`Server is Running in http://127.0.0.1/${PORT}/ on PORT ${PORT}`)