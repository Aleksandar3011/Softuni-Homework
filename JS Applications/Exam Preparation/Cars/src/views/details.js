import { deleteCar, getCarById } from "../api/cars.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (car, isOwner, onDelete) => html` 
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${car.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>
                <p class="description-para">${car.description}</p>
                
                    ${isOwner ? html`<div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} class="button-list">Delete</a>
                </div>` : ``}
                
            </div>
        </section>`;



export async function detailsView(ctx) {
    const car = await getCarById(ctx.params.id);
    const userData = getUserData();

    // const isOwner = userData?.id == meme._ownerId;

    let isOwner = ``;
    if(userData.id == car._ownerId){
        isOwner = true;
    }else{
        isOwner = false;
    }
    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete this car?`);

        if(choice){
            await deleteCar(ctx.params.id);
            ctx.page.redirect('/catalog')
        };
    };
}