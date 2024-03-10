import { Router } from 'express';
import { createPost , getAllPost, editPost, deletePost} from "../src/controllers/posts.controller.js";

const router = Router();

router.post('/posts', createPost);
router.get('/posts', getAllPost);
router.put('/posts/like/:id', editPost);
router.delete('/posts/:id', deletePost);

export default router;
