//1. khai báo http module
const http = require ('http')

//2. khai báo local host (optional)/server
const host = 'localhost'

//3. khai báo port của server 
const port = 3000

//4. khởi tạo web server 
const server = http.createServer((request, Respond) => {
    Respond.write("<h1>Hello World</h1>")
})

//5. chạy web server bằng cách listen port của server 
server.listen(port)