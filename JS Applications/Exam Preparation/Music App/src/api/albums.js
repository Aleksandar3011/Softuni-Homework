import { del, get, post, put } from './api.js'

export async function getAllAlbums(){
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
};

export async function getAlbumsById(id){
    return get('/data/albums/' + id)
};

export async function createAlbum(album){
    return post('/data/albums', album)
};

export async function deleteAlbum(id){
    return del('/data/albums/' + id);
}

export async function updateAlbum(id, album){
    return put('/data/albums/' + id, album)
}

export async function getAlbumByUsername(userId){
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchAlbums(search) {
    const query = encodeURIComponent(`name LIKE "${search}"`)
    return get(`/data/albums?where=${query}`)
}