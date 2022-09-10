import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteBookById, getBookById } from '../api/data.js';

const detailsTemplate = (book, isOwner, onDelete) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                    <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>`
                        : ``}
                    

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <!-- <a class="button" href="#">Like</a> -->

                    <!-- ( for Guests and Users )  -->
                    <!-- <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div> -->
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
  const bookId = ctx.params.id;
  const book = await getBookById(bookId);
  const user = ctx.user;

//   let userId;
//   let totalDonationCount;
//   let didUserDonate;

//   if (user != null) {
//       userId = user._id
//       didUserDonate = await didUserDonation(postId, userId);
      
//   }

  const isOwner = user && book._ownerId == user._id;
//   const isLoggedIn = user !== undefined;

//   totalDonationCount = await getTotalDonationCount(postId);
  ctx.render(detailsTemplate(book, isOwner, onDelete));

//   async function onClickDonation() {
//       const donation = {
//           postId,
//       }
//       await donationPost(donation);

//       totalDonationCount = await getTotalDonationCount(postId);
//       didUserDonate = await didUserDonation(postId, userId);
//       ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonation));
//   }

  async function onDelete() {
      const confirmed = confirm('Are you sure?');
      if (confirmed) {
          await deleteBookById(bookId);
          ctx.page.redirect('/dash');
      }
  }
}