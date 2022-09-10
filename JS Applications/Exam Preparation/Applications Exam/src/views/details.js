import { applyOffer, deleteOffer, didUserClickApply, getOfferById, getTotalAppCount } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (offer, isOwner, onDelete, isLoggedIn, totalAppCount, onClickApply, didUserApply) => html` 
          <section id="details">
            <div id="details-wrapper">
              <img id="details-img" src="${offer.imageUrl}" alt="example1" />
              <p id="details-title">${offer.title}</p>
              <p id="details-category">
                Category: <span id="categories">${offer.category}</span>
              </p>
              <p id="details-salary">
                Salary: <span id="salary-number">${offer.salary}</span>
              </p>
              <div id="info-wrapper">
                <div id="details-description">
                  <h4>Description</h4>
                  <span
                    >${offer.description}</span
                  >
                </div>
                <div id="details-requirements">
                  <h4>Requirements</h4>
                  <span
                    >${offer.requirements}</span
                  >
                </div>
              </div>
              <p>Applications: <strong id="applications">${totalAppCount}</strong></p>
  
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
                <div id="action-buttons">
                <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} id="delete-btn">Delete</a>
                </div>`: ``}
  
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${didUserApply == 0 && isLoggedIn && !isOwner ? html`<a href="javascript:void(0)" @click=${onClickApply} id="apply-btn">Apply</a>`
                    : `` }
                

            </div>
          </section>`;



export async function detailsView(ctx) {
    const offerId = ctx.params.id
    const offer = await getOfferById(offerId);
    // const offerOwnerId = offer._ownerId
    const userData = getUserData();
    const user = userData.id
    // console.log(user);
    // console.log(offerId);
    // console.log(offerOwnerId);
    
    
    let userId;
    let totalAppCount;
    let didUserApply;
    
    if(user != null){
        userId = user
        didUserApply = await didUserClickApply(offerId, userId)
    }
    
    const isLoggedIn = user !== undefined;
    const isOwner = userData?.id == offer._ownerId;
    // const isOwner = userData?.id == meme._ownerId;
    // const isOwner = user && offer._ownerId == user;
    totalAppCount = await getTotalAppCount(offerId);
    ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn, totalAppCount, onClickApply, didUserApply));

    async function onClickApply() {
        const apply = {
            offerId,
        }
        await applyOffer(apply);

        totalAppCount = await getTotalAppCount(offerId);
        didUserApply = await didUserClickApply(offerId, userId);
        ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn, totalAppCount, onClickApply, didUserApply));
    }


    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this meme?`);

        if(choice){
            await deleteOffer(ctx.params.id);
            ctx.page.redirect('/catalog')
        };
    };
}
