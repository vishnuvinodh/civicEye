import express from "express"
import { upload } from "../multer.js";

import { admincomplaint, adminstats, feedbkk, feedview, login, regcomplaint, register, updatestatus, updateuser, viwcomp, viweuser } from "../controller/usercontroller.js"



const userrouter=express.Router()

userrouter.post('/register',register)
userrouter.post('/login',login)
userrouter.get('/viweuser/:id',viweuser)
userrouter.put("/updateuser/:id",updateuser)
userrouter.get('/viwcomp/:id',viwcomp)
userrouter.get('/admincomplaint', admincomplaint);
userrouter.put('/admincomplaint/status/:id',updatestatus)
userrouter.post('/feedbkk',feedbkk)
userrouter.get('/feedview',feedview)
userrouter.get('/adminstats', adminstats);


userrouter.post("/regcomplaint", upload.single("proof"), regcomplaint);


export default userrouter