const url = `http://localhost:3030/jsonstore/messenger`;
let messagesArea = document.getElementById(`messages`)

function attachEvents() {

document.getElementById(`refresh`).addEventListener(`click`, reloadMessages);
document.getElementById(`submit`).addEventListener(`click`, sendMessage);
    
}
attachEvents();

async function reloadMessages(){
    const res = await fetch(url);
    const data = await res.json();
    
    messagesArea.value = Object.values(data).map(({author, content}) => `${author}: ${content}`).join(`\n`);
};

async function sendMessage(){
    const input = document.querySelectorAll(`input`);
    const author = input[0].value;
    const content = input[1].value;

    const person = {
        author,
        content
    }
    
    const res = await fetch(url, {
        method: `POST`,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(person)
    });

    const result = await res.json();

};
