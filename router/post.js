import  express from 'express';


export const postouter = express.Router();
import {deleteFile} from '../controllers/post.js'

router.route('/deleteFile/:id').delete(deleteFile)