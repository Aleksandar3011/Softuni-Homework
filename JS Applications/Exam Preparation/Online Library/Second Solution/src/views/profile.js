import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../api/data.js';

const profileTemplate = (bookList) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
                ${bookList.length == 0 ? html`<p class="no-books">No books in database!</p>`
                : bookList.map(b => html`
                <li class="otherBooks">
                    <h3>${b.title}</h3>
                    <p>Type: ${b.type}</p>
                    <p class="img"><img src="${b.imageUrl}"></p>
                    <a class="button" href="/details/${b._id}">Details</a>
                </li>`)}
            </ul>

            <!-- Display paragraph: If the user doesn't have his own books  -->
        </section>
`;

export async function profilePage(ctx) {
    const user = ctx.user._id
    const bookList = await getMyBooks(user);

    ctx.render(profileTemplate(bookList));
}