function addItem() {
    const text = document.getElementById(`newItemText`);
    const list = document.getElementById(`items`)
    const liElement = document.createElement(`li`);
    list.appendChild(liElement).textContent = text.value;
    text.value = ``;
} 