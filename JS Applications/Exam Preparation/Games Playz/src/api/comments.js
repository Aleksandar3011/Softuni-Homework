import * as api from './api.js'

const endPoints = {
    byGameId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    post: `/data/comments`
}

export async function getGameById(gameId){
    return api.get(endPoints.byGameId(gameId))
};

export async function postCommnet(comment){
    return api.post(endPoints.post, comment)
};