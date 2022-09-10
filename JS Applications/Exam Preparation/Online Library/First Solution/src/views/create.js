import { createBook } from "../api/books.js";
import { html } from "../lib.js";
// import { notify } from "../notify.js";

const createTemlate = (onSubmit) => html` 
        <section id="create-page" class="create">
            <form @submit=${onSubmit} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>`;

export function createView(ctx) {
    ctx.render(createTemlate(onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);

        const book = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            type: formData.get('type')
          }
          ;
          
          if(book.title == `` || book.description == `` || book.imageUrl == `` || book.type == ``){
            return alert(`All fields are required!`)
          };

          await createBook(book);
          e.target.reset();
          ctx.page.redirect(`/dash`)
    }
}
