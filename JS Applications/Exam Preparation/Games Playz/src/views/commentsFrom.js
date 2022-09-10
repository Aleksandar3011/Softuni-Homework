import { html } from "../lib.js";
import {getUserData} from '../util.js';
import * as commentsService from '../api/comments.js';


const formTemplate = () => html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmit} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`;


export function commentFormView(ctx, gameId) {
    const userData = getUserData();
    if(ctx.user){
        return formTemplate(userData);
    }else{
        return ``;
    }
};

async function onSubmit(ctx, data, event) {

};