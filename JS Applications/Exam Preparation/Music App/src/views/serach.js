import { searchAlbums } from "../api/albums.js";
import { html } from "../lib.js";

const searchTemplate = (searchHandler, albums) => html` 
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${searchHandler} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        ${albums.length == 0 ? html `<p class="no-result">No result.</p>`
            : albums.map(albumCard)}
        

            <!--If there are no matches-->
            <p class="no-result">No result.</p>
        </div>
    </section>`;

const albumCard = (album) => html`
<div class="search-result">
<!--If have matches-->
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/catalog/${album._id}" id="details">Details</a>
        </div>
    </div>
</div>`

export async function searchView(ctx) {
    const searchHandler = async () => {
        const searchEl = document.getElementById(`search-input`);

        const res = await searchAlbums(searchEl.value);

        ctx.render(searchTemplate(searchHandler, res));

    };

    ctx.render(searchTemplate(searchHandler, []));
}