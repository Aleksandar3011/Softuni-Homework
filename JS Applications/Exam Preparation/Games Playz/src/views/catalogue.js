import { getAllGames } from "../api/games.js";
import { html } from "../lib.js";

const catalogueTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${games.length == 0 
    ? html`<h3 class="no-articles">No articles yet</h3>`
        :games.map(gameCard)}
    <!-- Display paragraph: If there is no games  -->
    
</section>`;

const gameCard = (game) => html`

    <!-- Display div: with information about every game (if any) -->
    <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/catalogue/${game._id}" class="details-button">Details</a>
        </div>

    </div>`


export async function catalogueView(ctx){
    const games = await getAllGames();

    ctx.render(catalogueTemplate(games));
    
};