function lockedProfile() {
    Array.from(document.querySelectorAll(`button`)).forEach((b) =>
        b.addEventListener(`click`, toggle)
    );

    function toggle(e) {
        let parrent = e.target.parentElement;
        const isActive = parrent.querySelector(
            `input[type="radio"][value="unlock"]`
        ).checked;
        if (isActive) {
            let div = parrent.querySelector(`div`);
            if (e.target.textContent == `Show more`) {
                div.style.display = `block`;
                e.target.textContent = `Hide it`;
            } else {
                div.style.display = ``;
                e.target.textContent = `Show more`;
            }
        }
    }
}
