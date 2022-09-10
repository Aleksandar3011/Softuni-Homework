
import { deletePet, getPetById } from "../api/pets.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (pet, isOwner, onDelete) => html` 
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                        ${isOwner ? html`
                        <div class="actionBtn">
                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a @click=${onDelete} class="remove">Delete</a>
                        </div>`
                         : ``}
                        <!-- Only for registered user and creator of the pets-->

                        <!--(Bonus Part) Only for no creator and user-->
                        <!-- <a href="#" class="donate">Donate</a> -->
                    
                </div>
            </div>
        </section>`;



export async function detailsView(ctx) {
    const pets = await getPetById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == pets._ownerId;

    // let isOwner = ``;
    // if(userData.id == albums._ownerId){
    //     isOwner = true;
    // }else{
    //     isOwner = false;
    // }
    ctx.render(detailsTemplate(pets, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this meme?`);

        if(choice){
            await deletePet(ctx.params.id);
            ctx.page.redirect('/')
        };
    };
}










// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { deletePet, getPetById, getTotalDonationCount, didUserDonation, donationPost } from '../api/pets.js';

// const detailsTemplate = (pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate) => html`
//     <!-- Details Page -->
//        <section id="detailsPage">
//            <div class="details">
//               <div class="animalPic">
//                    <img src="${pet.image}">
//                  </div>
//                <div>
//                    <div class="animalInfo">
//                       <h1>Name: ${pet.name}</h1>
//                        <h4>Age: ${pet.age}</h4>
//                       <h4>Weight: ${pet.weight}</h4>
//                          <h4 class="donation">Donation: 0$</h4>
//                      </div>
    
//               ${isOwner ? html `
//               <div class="actionBtn">
//                         <a href="/edit/${pet._id}" class="edit">Edit</a>
//                         <a @click=${onDelete} class="remove">Delete</a>
//                         </div>` : ''}
//             ${(() => {
//                 if (didUserDonate == 0) {
//                     if (isLoggedIn && !isOwner) {        
//                         return html`<a @click=${onClickDonation}href="javascript:void(0)" class="donate">Donate</a>`
//                     }
//                 }
//             })()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// `;

// export async function detailsPage(ctx) {
//   const postId = ctx.params.id;
//   const pet = await getPetById(postId);
//   const user = ctx.user;

//   let userId;
//   let totalDonationCount;
//   let didUserDonate;

//   if (user != null) {
//       userId = pet._id
//       didUserDonate = await didUserDonation(postId, userId);
      
//   }

//   const isOwner = user && pet._ownerId == pet._id;
//   const isLoggedIn = user !== undefined;

//   totalDonationCount = await getTotalDonationCount(postId);
//   ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate));

//   async function onClickDonation() {
//       const donation = {
//           postId,
//       }
//       await donationPost(donation);

//       totalDonationCount = await getTotalDonationCount(postId);
//       didUserDonate = await didUserDonation(postId, userId);
//       ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonation));
//   }

//   async function onDelete() {
//       const confirmed = confirm('Are you sure?');
//       if (confirmed) {
//           await deletePet(postId);
//           ctx.page.redirect('/');
//       }
//   }
// }