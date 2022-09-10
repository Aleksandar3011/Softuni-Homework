import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all ads
export async function getAllBooks() {
    return await api.get(host + '/data/books?sortBy=_createdOn%20desc');
}

// get ad by id
export async function getBookById(id) {
    return await api.get(host + `/data/books/${id}`);
}

// create ad
export async function createBook(listing) {
    return await api.post(host + '/data/books', listing);
}

// edit ad by id
export async function editBookById(id, listing) {
    return await api.put(host + `/data/books/${id}`, listing);
}

// delete ad by id
export async function deleteBookById(id) {
    return await api.del(host + `/data/books/${id}`)
}

// get my ads
export async function getMyBooks(userId) {
    return await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donationPost(listingId) {
    return await api.post(host + `/data/donations`, listingId);
}

export async function getTotalDonationCount(petId) {
    return await api.get(host + `/data/donations?where=postId%3D%22${petId}%22&distinct=_ownerId&count`);
}


export async function didUserDonation(listingId, userId){
    return await api.get(host + `/data/donations?where=postId%3D%22${listingId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    
}