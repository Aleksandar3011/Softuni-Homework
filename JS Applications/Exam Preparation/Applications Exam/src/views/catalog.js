import { getAllOffers } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (offers) => html` 
          <section id="dashboard">
            <h2>Job Offers</h2>
  
            <!-- Display a div with information about every post (if any)-->
            ${offers.length == 0 ? html`<h2>No offers yet.</h2>`
                : offers.map(o => html`
                <div class="offer">
              <img src="${o.imageUrl}" alt="example2" />
              <p>
                <strong>Title: </strong
                ><span class="title">${o.title}</span>
              </p>
              <p><strong>Salary:</strong><span class="salary">${o.salary}</span></p>
              <a class="details-btn" href="/details/${o._id}">Details</a>
            </div>`)}
  
            <!-- Display an h2 if there are no posts -->

          </section>`;


export async function catalogView(ctx) {
    const offers = await getAllOffers();

    ctx.render(catalogTemplate(offers));
}