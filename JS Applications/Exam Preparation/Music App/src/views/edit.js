import { html } from "../lib.js";
import { getAlbumsById, updateAlbum } from "../api/albums.js";

const editTemlate = (album ,onSubmit) => html` 
    <section class="editPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Edit Album</legend>

                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" name="name" class="name" type="text" .value=${album.name}>

                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${album.imgUrl}>

                    <label for="price" class="vhide">Price</label>
                    <input id="price" name="price" class="price" type="text" .value=${album.price}>

                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${album.releaseDate}>

                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" name="artist" class="artist" type="text" .value=${album.artist}>

                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" name="genre" class="genre" type="text" .value=${album.genre}>

                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" class="description" rows="10"
                        cols="10">${album.description}</textarea>

                    <button class="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>`;

export async function editView(ctx) {
    const album = await getAlbumsById(ctx.params.id)

    ctx.render(editTemlate(album ,onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const album = {
            name: formData.get(`name`),
            imgUrl: formData.get(`imgUrl`),
            price: formData.get(`price`),
            releaseDate: formData.get(`releaseDate`),
            artist: formData.get(`artist`),
            genre: formData.get(`genre`),
            description: formData.get(`description`)
          };

          if(album.name == `` || album.description == `` || album.imgUrl == `` || album.price == `` || album.releaseDate == `` || album.artist == `` || album.genre == ``){
            return alert(`All fields are required!`)
          };

          await updateAlbum(ctx.params.id ,album);
          e.target.reset();
          ctx.page.redirect(`/catalog/` + ctx.params.id)
          
    }
}
