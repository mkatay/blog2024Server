import {removeFromCloud} from '../myCloudinary.js'


export const deleteFiler=async (req,res) => {
    const {id} = req.params;
    console.log(id)         
    removeFromCloud(avatar_id)
    res.json({message:`Sikeres módosítás!`,avatar:cloudFile.url,avatar_id:cloudFile.public_id})
}

