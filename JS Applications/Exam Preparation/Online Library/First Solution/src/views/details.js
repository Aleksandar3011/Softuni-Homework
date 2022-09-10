import { deleteBook, getBookById, likePost, didUserLikes, getTotalLikes  } from "../api/books.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, onDelete, isLoggedIn, totalLikeCount, onClickLike, didUserLike) => html` 
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                    <a class="button" @click=${onDelete}>Delete</a>`: ``}

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${(()=> {
                        if(didUserLike == 0) {
                            if(isLoggedIn && !isOwner) {
                                return html`<a @click=${onClickLike} class="button" href="javascript:void(0)">Like</a>`
                            }
                        }
                    })()}
                    

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${totalLikeCount}</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`;



export async function detailsView(ctx) {
    const bookId = ctx.params.id
    const book = await getBookById(bookId);
    const userData = getUserData();
    const isOwner = userData?.id == book._ownerId;
    const user = ctx.user;


    let userId;
    let totalLikeCount;
    let didUserLike;
    
    if (user != null) {
        userId = user._id
        didUserLike = await didUserLikes(bookId, userId);
        
    }
    const isLoggedIn = user !== undefined;
    totalLikeCount = await getTotalLikes(bookId);
    
    ctx.render(detailsTemplate(book, isOwner, onDelete, isLoggedIn, totalLikeCount, onClickLike, didUserLike));

    async function onClickLike() {
      const like = {
          bookId,
      }
      await likePost(like);

      totalLikeCount = await getTotalLikes(bookId);
      didUserLike = await didUserLikes(bookId, userId);
      ctx.render(detailsTemplate(book, isOwner, onDelete, isLoggedIn, totalLikeCount, onClickLike, didUserLike));
  }

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this meme?`);

        if(choice){
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/dash')
        };
    };
}
