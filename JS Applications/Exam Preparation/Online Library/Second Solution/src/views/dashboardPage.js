import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/data.js';

const dashboardTamplate = (book) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
                ${book.length == 0 ? html`<p class="no-books">No books in database!</p>`
                    : book.map(b => html`
                    <li class="otherBooks">
                    <h3>${b.title}</h3>
                    <p>Type: ${b.type}</p>
                    <p class="img"><img src="${b.imageUrl}"></p>
                    <a class="button" href="/details/${b._id}">Details</a>
                </li>`)}
            </ul>
            <!-- Display paragraph: If there are no books in the database -->

        </section>
`

export async function dashboardPage(ctx) {
    const book = await getAllBooks();
    ctx.render(dashboardTamplate(book));
}