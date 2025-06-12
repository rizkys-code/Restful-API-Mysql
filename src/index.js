const express = require('express')
const app = express()

const mahasiswaRoutes = require('./routes/mahasiswa')


app.use(express.json())

app.use('/', mahasiswaRoutes)

app.listen(3000, ()=>{
    console.log('asik servernya jalan bro')
})