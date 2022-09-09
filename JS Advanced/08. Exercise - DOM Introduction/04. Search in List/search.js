function search() {
    let towns = document.querySelectorAll(`ul#towns li`);
    let input = document.getElementById(`searchText`).value;
    let result = document.querySelector(`#result`);
    let matches = 0;
    for (let town of towns) {
      let text = town.textContent;
      console.log(text);
        if (town.textContent.includes(input)) {
          town.style.fontWeight = `bold`;
          town.style.textDecoration = `underline`;
          matches++;
        }
    }
    result.textContent = `${matches} matches found`;
}
