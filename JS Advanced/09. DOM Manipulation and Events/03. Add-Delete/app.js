function addItem() {
    const text = document.getElementById(`newItemText`);
    const list = document.getElementById(`items`);
    const liElement = document.createElement(`li`);
    liElement.textContent = text.value;
    const aElement = document.createElement(`a`);
    aElement.textContent = `[Delete]`;
    aElement.href = `#`;
    liElement.appendChild(aElement);

    aElement.addEventListener(`click`, deleteRow);

    list.appendChild(liElement);
    text.value = ``;

    function deleteRow(ev) {
        ev.target.parentElement.remove();
    }
}
