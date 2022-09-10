import { deletePost, getPostById } from "../api/posts.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (post, isOwner, onDelete, isLogged) => html` 
    <section id="details-page">
        <h1 class="title">Post Details</h1>

        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src="${post.imageUrl}" alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${post.title}</h2>
                    <p class="post-description">Description: ${post.description}</p>
                    <p class="post-address">Address: ${post.address}</p>
                    <p class="post-number">Phone number: ${post.phone}</p>
                    <p class="donate-Item">Donate Materials: 0</p>

                    <!--Edit and Delete are only for creator-->
                    
                    <div class="btns">
                        ${isOwner ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} class="delete-btn btn">Delete</a>`
                            : ``}

                        
                        <!--Bonus - Only for logged-in users ( not authors )-->
                       ${isLogged ? html`<a href="#" class="donate-btn btn">Donate</a>` 
                       : ``}

                    </div>

                </div>
            </div>
        </div>
    </section>`;



export async function detailsView(ctx) {
    const post = await getPostById(ctx.params.id);
    const userData = getUserData();

    const isOwner = userData?.id == post._ownerId;

    // let isOwner = ``;
    // if(userData.id == post._ownerId){
    //     isOwner = true;
    // }else{
    //     isOwner = false;
    // }
    let isLogged = ``;
    if(userData){
        isLogged = true;
    }else{
        isLogged = false
    }

    ctx.render(detailsTemplate(post, isOwner, onDelete, isLogged));

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this meme?`);

        if(choice){
            await deletePost(ctx.params.id);
            ctx.page.redirect('/')
        };
    };
}
