const http = require('http');
const fs = require('fs');

const requestListener = (req, res)=>{
  // console.log('req method: ', req.method)
  // console.log('res url: ', req.url)
  const {method,url} = req;
  if(method ==='GET') {
    if(url==="/"){
      fs.readFile('./views/index.html',"utf-8", (err,data)=>{
        if(err){
          console.log('err ', err);
          res.end();
        }
        res.end(data);
      })
    }
  }

  if(method ==='GET') {
    if(url==="/about"){
      fs.readFile('./views/about.html',"utf-8", (err,data)=>{
        if(err){
          console.log('err ', err);
          res.end('404');
        }
        res.end(data);
      })
    }
  }

  if(method ==='GET') {
    if(url==="/contact"){
      fs.readFile('./views/contact.html',"utf-8", (err,data)=>{
        if(err){
          console.log('err ', err);
          res.end();
        }
        res.end(data);
      })
    }
  }
 
}

const server = http.createServer(requestListener);

const port = 3000;
server.listen(port)
console.log(server)