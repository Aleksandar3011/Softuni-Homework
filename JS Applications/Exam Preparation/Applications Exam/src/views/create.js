import { createOffer } from "../api/data.js";
import { html } from "../lib.js";
// import { notify } from "../notify.js";

const createTemlate = (onSubmit) => html` 
          <section id="create">
            <div class="form">
              <h2>Create Offer</h2>
              <form @submit=${onSubmit} class="create-form">
                <input
                  type="text"
                  name="title"
                  id="job-title"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="job-logo"
                  placeholder="Company logo url"
                />
                <input
                  type="text"
                  name="category"
                  id="job-category"
                  placeholder="Category"
                />
                <textarea
                  id="job-description"
                  name="description"
                  placeholder="Description"
                  rows="4"
                  cols="50"
                ></textarea>
                <textarea
                  id="job-requirements"
                  name="requirements"
                  placeholder="Requirements"
                  rows="4"
                  cols="50"
                ></textarea>
                <input
                  type="text"
                  name="salary"
                  id="job-salary"
                  placeholder="Salary"
                />
  
                <button type="submit">post</button>
              </form>
            </div>
          </section>`;

export function createView(ctx) {
    ctx.render(createTemlate(onSubmit));

    async function onSubmit(e){
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

          await createOffer(offer);
          e.target.reset();
          ctx.page.redirect(`/catalog`)
    }
}