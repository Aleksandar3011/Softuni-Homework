const url = `http://localhost:3030/jsonstore/phonebook`;
const ulPhoneBookEl = document.getElementById(`phonebook`);
const keys = `http://localhost:3030/jsonstore/phonebook`;


function attachEvents() {
    const loadBtn = document.getElementById(`btnLoad`)
    loadBtn.addEventListener(`click`, getPhones)
    const createBtn = document.getElementById(`btnCreate`);
    createBtn.addEventListener(`click`, create);

}

async function getPhones(){
    const res = await fetch(url);
    const data = await res.json();
    
    const params = Object.values(data);
    ulPhoneBookEl.replaceChildren();

    for(let el of params){
        const li = document.createElement(`li`);
        const id = el._id;
        const deleteBtn = document.createElement(`button`);
        deleteBtn.textContent = `Delete`;
        deleteBtn.addEventListener(`click`, deleteFunc)
        li.textContent = `${el.person}: ${el.phone}`;
        li.setAttribute(`id`,id)
        li.appendChild(deleteBtn);
        ulPhoneBookEl.appendChild(li)
    };
    // ulPhoneBookEl.textContent = Object.values(data).map(({person, phone}) => `${person}: ${phone}`).join(`\n`);
}

async function create(){
    const personEl = document.getElementById(`person`).value;
    const phoneEl = document.getElementById(`phone`).value;
    ulPhoneBookEl.replaceChildren();

    const newPerson = {
        person: personEl,
        phone: phoneEl
    };

    const res = await fetch(url, {
        method: `POST`,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newPerson)
    });

    
    
    const get = await fetch(url);
    const serverData = await get.json();
    const params = Object.values(serverData);
    
    for(let el of params){
        const li = document.createElement(`li`);
        const deleteBtn = document.createElement(`button`);
        deleteBtn.textContent = `Delete`
        deleteBtn.addEventListener(`click`, deleteFunc)
        li.textContent = `${el.person}: ${el.phone}`;
        li.appendChild(deleteBtn);
        ulPhoneBookEl.appendChild(li);
    };
    document.getElementById(`person`).value = ``;
    document.getElementById(`phone`).value = ``;
    
};

async function deleteFunc(e){
    const id = e.target.parentNode.id;
    const res = await fetch(`${keys}/${id}`, {
        method: `DELETE`
    });
    const data = res.json();
    console.log(data);
    e.target.parentNode.remove()
};

attachEvents();