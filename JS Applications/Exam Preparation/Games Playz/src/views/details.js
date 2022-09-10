import { getGameById, deleteGame } from "../api/games.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";
import { commentsView } from "./comments.js";
import { commentFormView } from "./commentsFrom.js";

const detailsTemplate = (game, isOwner, commentsSection, commentFormSection, onDelete) => html` 
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
                    ${game.summary}
        </p>

        ${commentsSection}

        ${isOwner 
            ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
                   <a @click=${onDelete} class="button">Delete</a> 
                   </div>` 
                    : ``}
        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            ${commentFormSection}
    </div>
</section>`;


export async function detailsView(ctx) {
    
    const userData = getUserData();
    
    const [game, commentsSection] = await Promise.all([
            getGameById(ctx.params.id), 
            commentsView(ctx.params.id)
        ]);
        const commentFormSection = commentFormView(ctx, ctx.params.id)

        const isOwner = userData?.id == game._ownerId;
    // let isOwner = ``;
    // if(userData.id == game._ownerId){
    //     isOwner = true;
    // }else{
    //     isOwner = false;
    // }
    ctx.render(detailsTemplate(game, isOwner, commentsSection, commentFormSection, onDelete));

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this meme?`);
        
        if(choice){
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/')
        };
    };
}