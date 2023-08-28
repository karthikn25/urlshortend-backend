import express from 'express';
import { Short } from '../models/shrots.js';

const router = express.Router();

router.post("/post",async(req,res)=>{
    try {
        
       const urls = await new Short({
             longurl : req.body.longurl,
             shorturl:  generateUrl()
        }).save()
   res.status(200).json({message:"shorturl get sucessfully",urls})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})


router.get("/url/:shorturl",async(req,res)=>{
    try {
     const Url = await Short.findOne({shorturl:req.params.shorturl})
       console.log(Url)
       if(Url){
        const longurl = Url.longurl
        res.redirect(longurl)
       }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

function generateUrl() {
  var rndResult = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < 5; i++) {
    rndResult += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  console.log(rndResult);
  return rndResult;
}



export const ShortRouter = router