import { logout } from './api/users.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
// import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';
// import { searchView } from './views/serach.js';

const main = document.querySelector(`main`);

document.getElementById(`logoutBtn`).addEventListener(`click`, onLogout)

page(decorateContext);
page('/', homeView);
// page('/search', searchView)
page('/details/:id', detailsView);
page('/catalog', catalogView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
// page('/profile', profileView);

updateNav();
page.start();

// Skeleton
function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
};

// Skeleton
function renderMain(templateResult) {
    render(templateResult, main);
};

function updateNav() {
    const userData = getUserData();

    if(userData){
        document.querySelector(`#guest`).style.display = `none`;
        document.querySelector(`#user`).style.display = `inline-block`;
    }else{
        document.querySelector(`#guest`).style.display = `inline-block`;
        document.querySelector(`#user`).style.display = `none`;
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect(`/`);
}
