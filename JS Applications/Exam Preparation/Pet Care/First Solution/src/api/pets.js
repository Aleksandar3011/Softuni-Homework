import { del, get, post, put } from './api.js'
const host = 'http://localhost:3030'
export async function getAllPets(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
};

export async function getPetById(id){
    return get('/data/pets/' + id)
};

export async function createPet(pet){
    return post('/data/pets', pet)
};

export async function deletePet(id){
    return del('/data/pets/' + id);
}

export async function updatePet(id, pet){
    return put('/data/pets/' + id, pet)
}

export async function getAlbumByUsername(userId){
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchAlbums(search) {
    const query = encodeURIComponent(`name LIKE "${search}"`)
    return get(`/data/albums?where=${query}`)
}



// export async function donationPost(listingId) {
//     return post(`/data/donation`, listingId);
// }

// export async function getTotalDonationCount(petId) {
//     return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
// }


// export async function didUserDonation(petId, userId){
//     return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    
// }