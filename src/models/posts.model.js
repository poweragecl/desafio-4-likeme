import pool from "../../database/config.js"


// POST
export const createPostModel = async({titulo, url, descripcion}) => {
    try{
        const result = await pool.query('INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *', 
        [titulo, url, descripcion]);
        console.log(result.rows);
        return result.rows[0];
    } catch (error){
        throw new Error("Error creando post:" +  error.message)
    }
};

// GET
export const getAllPostModel = async() => {
    try {
        const allPosts = await pool.query('SELECT * FROM posts');
        console.log(allPosts);
        return allPosts.rows;
    } catch (error) {
        throw new Error('Error obteniendo todos los posts:' + error.message);
    }
};


// PUT

export const editPostModel = async(id) =>{
    try {

        const postActual = (await getAllPostModel()).find(post => post.id === id);
        const nuevosLikes = postActual ? postActual.likes + 1 : 1;  
        const result = await pool.query('update posts set likes = $1 where id = $2' , [nuevosLikes, id]);
        return result;
    } catch (error) {
        throw new Error('Error editando el post: ' + error.message);
    }
}


// DELETE

export const deletePostModel = async(id) =>{
    try {
        const result = await pool.query("delete from posts where id = $1", [id]);
        console.log(result.rows);
        return result;

    } catch (error) {
        throw new Error('Error eliminando el post: ' + error.message);
    }
}