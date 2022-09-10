import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePetById, getPetById } from '../api/data.js';

const detailsTemplate = (pet, isOwner, onDelete) => html`
    <!-- Details Page -->
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
                    <div class="actionBtn">
                        ${isOwner ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a @click=${onDelete} class="remove">Delete</a>` : ``}
                        <!-- Only for registered user and creator of the pets-->
                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="#" class="donate">Donate</a>
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
  const petId = ctx.params.id;
  const pet = await getPetById(petId);
  const user = ctx.user;


  const isOwner = user && pet._ownerId == user._id;

  ctx.render(detailsTemplate(pet, isOwner, onDelete));


  async function onDelete() {
      const confirmed = confirm('Are you sure?');
      if (confirmed) {
          await deletePetById(petId);
          ctx.page.redirect('/');
      }
  }
}