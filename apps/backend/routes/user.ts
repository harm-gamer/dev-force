import {Router} from "express";
import {client} from "db/client"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

import { password } from "bun";

const router = Router();

const USER = {
    username : String,
    password : String
}

router.post("/signup", async (req,res) =>{
   const {email} = req.body;

  
    // check if user exists
    const existingUser = await client.user.findUnique({
        where : {
         email : email
        }
    })

    if(existingUser){
        return res.status(400).json({message : "User already exists"});
    }

    

    

    // crete user
    const newUser = await client.user.create({
        data : {
            email : email || "" 
        }
    })
    return res.status(201).json({user : newUser});
})

router.post("/login",(req,res) =>{

})

export default router;