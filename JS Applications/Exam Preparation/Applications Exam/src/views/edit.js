import { html } from "../lib.js";
import { getOfferById, updateOffer } from "../api/data.js";
// import { notify } from "../notify.js";

const editTemlate = (offer ,onSubmit) => html` 
          <section id="edit">
            <div class="form">
              <h2>Edit Offer</h2>
              <form @submit=${onSubmit} class="edit-form">
                <input
                  type="text"
                  name="title"
                  id="job-title"
                  placeholder="Title"
                  .value="${offer.title}"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="job-logo"
                  placeholder="Company logo url"
                  .value="${offer.imageUrl}"
                />
                <input
                  type="text"
                  name="category"
                  id="job-category"
                  placeholder="Category"
                  .value="${offer.category}"
                />
                <textarea
                  id="job-description"
                  name="description"
                  placeholder="Description"
                  rows="4"
                  cols="50"
                  .value="${offer.description}"
                ></textarea>
                <textarea
                  id="job-requirements"
                  name="requirements"
                  placeholder="Requirements"
                  rows="4"
                  cols="50"
                  .value="${offer.requirements}"
                ></textarea>
                <input
                  type="text"
                  name="salary"
                  id="job-salary"
                  placeholder="Salary"
                  .value="${offer.salary}"
                />
  
                <button type="submit">post</button>
              </form>
            </div>
          </section>`;

export async function editView(ctx) {
    const offer = await getOfferById(ctx.params.id)

    ctx.render(editTemlate(offer ,onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const offer = {
            title: formData.get('title'),
            imageUrl: formData.get('imageUrl'), 
            category: formData.get('category'), 
            description: formData.get('description'), 
            requirements: formData.get('requirements'), 
            salary: formData.get('salary')
          } 
          ;
          
          if(offer.title == `` || offer.description == `` || offer.imageUrl == `` || offer.category == `` || offer.requirements == `` || offer.salary == ``){
            return alert(`All fields are required!`)
          };

          await updateOffer(ctx.params.id ,offer);
          e.target.reset();
          ctx.page.redirect(`/details/` + ctx.params.id)
          
    }
}
