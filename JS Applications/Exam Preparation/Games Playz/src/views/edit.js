import { html } from "../lib.js";
import { getGameById, updateGame } from "../api/games.js";


const editTemlate = (game ,onSubmit) => html` 
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value="${game.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value="${game.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${game.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value="${game.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value="${game.summary}"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editView(ctx) {
    const game = await getGameById(ctx.params.id)

    ctx.render(editTemlate(game ,onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const game = {
            title: formData.get(`title`),
            category: formData.get(`category`),
            maxLevel: formData.get(`maxLevel`),
            imageUrl: formData.get(`imageUrl`),
            summary: formData.get(`summary`),
          };
          
          if(game.title == `` || game.summary == `` || game.imageUrl == `` || game.category == `` || game.maxLevel == ``){
            return alert(`All fields are required!`)
          };

          await updateGame(ctx.params.id ,game);
          e.target.reset();
          ctx.page.redirect(`/catalogue/` + ctx.params.id)
          
    }
}
