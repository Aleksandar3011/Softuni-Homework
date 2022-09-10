import { html } from "../lib.js";
import {getUserData} from '../util.js';
import * as commentsService from '../api/comments.js';


const commentsTemplate = (comments) => html` 
<div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>`
                : commnetList(comments)}

            
        </div>
`;

const commnetList = (comments) => html`
<ul>
    ${comments.map(commentCard)}
</ul>
`

const commentCard = (comment) => html `
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>
`

export async function commentsView(gameId) {
    const comments = await commentsService.getGameById(gameId);
    return commentsTemplate(comments);
}