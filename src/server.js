const express = require("express")
const routes = require ("./routes")
const cors = require("cors")
require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status("Algo deu errado!")
})
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})