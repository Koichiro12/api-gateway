const express = require('express')
const app = express();
const { createProxyMiddleware }  = require('http-proxy-middleware')

const port = 3000

//Contoh simple Proxy middleware for API
// microservice api bisa anda buat menggunakan node js 
//Example Microservice here https://github.com/Koichiro12/api-microservices
app.use('/api',createProxyMiddleware({
    target:'http://localhost:3001',
    changeOrigin:true,
    logger:console,
    pathRewrite:{
        '^/api' : ''
    }
}));

//Blok semua request ke url http://localhost:3000/
app.all('/',(req,res)=>{
    res.status(403).send("Sori ngab, Gaboleh Masuk :D")
})
app.listen(port,()=>{
    console.log("API Gateway Listening at http://localhost:"+port);
})