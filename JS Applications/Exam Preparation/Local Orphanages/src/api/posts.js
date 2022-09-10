import { del, get, post, put } from './api.js'

export async function getAllPosts(){
    return get('/data/posts?sortBy=_createdOn%20desc');
};

export async function getPostById(id){
    return get('/data/posts/' + id)
};

export async function createPost(posts){
    return post('/data/posts', posts)
};

export async function deletePost(id){
    return del('/data/posts/' + id);
}

export async function updatePost(id, posts){
    return put('/data/posts/' + id, posts)
}

export async function getPostsByUsernae(userId){
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}