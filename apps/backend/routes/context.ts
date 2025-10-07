import {Router} from "express";

const router = Router();

// http://api.devforce.com/context?offset=10&page=20
router.get("/active",(req,res) =>{
    const {offset,page} = req.body;

})

router.get("/finised",(req,res) =>{
    const {offset,page} = req.body;
    

})

router.get("/:contextId",(req,res) =>{
     const contextId = req.params.contextId;
})

router.get("/:contextId/:challengeId",(req,res)=>{
    const {contextId,challengeId} = req.params;
})

router.get("/leaderboard/:contextId",(req,res)=>{
    const {contextId} = req.params;
})

router.post("/submit/:contextId/:challengeId",(req,res)=>{
    const {contextId,challengeId} = req.params;
})


export default router;