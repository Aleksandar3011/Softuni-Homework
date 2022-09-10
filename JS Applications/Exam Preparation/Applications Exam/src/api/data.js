import { del, get, post, put } from './api.js'

export async function getAllOffers(){
    return get('/data/offers?sortBy=_createdOn%20desc');
};

export async function getOfferById(id){
    return get('/data/offers/' + id)
};

export async function createOffer(offer){
    return post('/data/offers', offer)
};

export async function deleteOffer(id){
    return del('/data/offers/' + id);
}

export async function updateOffer(id, meme){
    return put('/data/offers/' + id, meme)
}

export async function getMemesByUser(userId){
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function applyOffer(apply) {
    return post(`/data/applications`, apply);
}

export async function getTotalAppCount(offerId) {
    return get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}


export async function didUserClickApply(offerId, userId){
    return get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}