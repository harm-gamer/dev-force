import express from 'express'
import user from "./routes/user.ts"
import admin from "./routes/admin.ts"
import context from "./routes/context.ts"


const app = express();

app.use("/user",user);
app.use("/admin",admin);
app.use("/context",context);

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})