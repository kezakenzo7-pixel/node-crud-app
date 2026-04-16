import expresss from "express";


const app = expresss();
const router=expresss.Router();

router.get('/',(req,res)=>{
    res.send("Hello world");
});