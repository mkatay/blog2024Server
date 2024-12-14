import  express from "express";
import cors from 'cors';
import { removeFromCloud } from "./cloudinaryConfig.js";

const app=express()
app.use(cors())
app.use(express.json())

app.delete('/post/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)         
        removeFromCloud(id)
        res.json({message:`Sikeres törlés!`,id})
      } catch (err) {
            console.log(err);
      }
})
   

const port=process.env.PORT || 5000

app.listen(port,()=>console.log(`listening on port ${port}...`))