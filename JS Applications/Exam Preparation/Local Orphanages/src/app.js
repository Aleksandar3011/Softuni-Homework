import { logout } from './api/users.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
// import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';

const main = document.getElementById(`main-content`);

document.getElementById(`logoutBtn`).addEventListener(`click`, onLogout)

page(decorateContext);
page('/', homeView);
// page('/memes', catalogView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/profile', profileView);

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
        document.querySelector(`#user`).style.display = `block`;
        // document.querySelector(`.user span`).textContent = `Welcome, ${userData.email}`
    }else{
        document.querySelector(`#guest`).style.display = `block`;
        document.querySelector(`#user`).style.display = `none`;
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect(`/`);
}
