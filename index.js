const express = require('express');
const app = express();


app.use('/inicio', (req,res)=>{
  res.send("PAGINA DE BIENVENIDA")
})
//app.use('/', require('./router/router-cliente'));
app.use('/', (req,res)=>{
    res.send("principal");
});
const PORT =process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log("servidor iniciado...");
});