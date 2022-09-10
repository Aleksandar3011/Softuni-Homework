import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all ads
export async function getAllPets() {
    return await api.get(host + '/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

// get ad by id
export async function getPetById(id) {
    return await api.get(host + `/data/pets/${id}`);
}

// create ad
export async function createPet(pet) {
    return await api.post(host + '/data/pets', pet);
}

// edit ad by id
export async function editPetById(id, listing) {
    return await api.put(host + `/data/pets/${id}`, listing);
}

// delete ad by id
export async function deletePetById(id) {
    return await api.del(host + `/data/pets/${id}`)
}

// get my ads
export async function getMyPosts(userId) {
    return await api.get(host + `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
