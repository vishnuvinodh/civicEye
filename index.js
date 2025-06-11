import express from 'express'
import cors from 'cors'  
import { connectdb } from './utils/db.js'
import userrouter from './router/userrouter.js'

const app=express()
app.use(express.json())

app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use('/user',userrouter)

connectdb().then(()=>{
    app.listen(5002,()=>{console.log("server running");
    })
})