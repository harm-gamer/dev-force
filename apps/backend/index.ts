import express from 'express'

const app = express();

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/context",contextRouter);

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})