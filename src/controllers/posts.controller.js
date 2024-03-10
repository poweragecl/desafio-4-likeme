import {createPostModel , getAllPostModel, editPostModel, deletePostModel} from '../models/posts.model.js';

export const createPost = async( req, res ) => {
    try{
        const post = req.body;
        const newPost = await createPostModel(post)
        res.status(201).json({ post: newPost });
    } catch (error){
        res.status(500).json({error: error.message});
        console.log('Error al procesar la solicitud: ', error);
    }
}

export const getAllPost = async  (req, res) => {
    try{
        const posts = await getAllPostModel()
        res.status(200).json(posts);
    } catch (error){
        res.status(500).json({ error: error.message })
        console.log('Error al procesar la solicitud: ', error);
    }
}

export const editPost = async(req, res) => {
    try {
        const post = req.params.id;
        const likePost = await editPostModel(post);
        res.status(200).json({ post: likePost });

    } catch (error) {
        res.status(500).json({error: error.message});
        console.log('Error al procesar la solicitud: ', error); 
    }
}

export const deletePost = async(req, res) => {
    try {
        const post = req.params.id;
        const delPost = await deletePostModel(post);
        res.status(200).json({ post: delPost });
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log('Error al procesar la solicitud: ', error);
    }
}