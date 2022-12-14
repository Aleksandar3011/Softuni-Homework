
import { post } from "../api/api.js";
import { getPostsByUsernae } from "../api/posts.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (posts) => html` 
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>

        <!-- Display a div with information about every post (if any)-->
        <div class="my-posts">
            ${posts.length == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
                : posts.map(postCard)}

        </div>

        <!-- Display an h1 if there are no posts -->
        
    </section>`;

const postCard = (post) => html `
<div class="post">
<h2 class="post-title">${post.title}</h2>
<img class="post-image" src="${post.imageUrl}" alt="Material Image">
<div class="btn-wrapper">
    <a href="/details/${post._id}" class="details-btn btn">Details</a>
</div>
</div>`;

export async function profileView(ctx) {
    const userData = getUserData();
    const posts = await getPostsByUsernae(userData.id)
    ctx.render(profileTemplate(posts));
}