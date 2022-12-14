import { getAllBooks } from "../api/books.js";
// import { getAllMemes } from "../api/memes.js";
import { html } from "../lib.js";

const catalogTemplate = (books) => html` 
<section
    id="dashboard-page"
    class="dashboard"
>
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${books.length == 0
            ? html`<p class="no-books">No books in database!</p>`
            : books.map(bookCard)}
    </ul>
    <!-- Display paragraph: If there are no books in the database -->
</section>`;

const bookCard = (book) => html` 
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}" /></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;

export async function catalogView(ctx) {
    const books = await getAllBooks();

    ctx.render(catalogTemplate(books));
}
