function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allPeople = document.querySelectorAll(`tbody tr`);
      let search = document.getElementById(`searchField`);

      for(let i = 0; i < allPeople.length; i++){
         allPeople[i].classList.remove(`select`)
         if(allPeople[i].textContent.includes(search.value)){
            allPeople[i].className = `select`;
         }
      }
      search.value = ``;
   }
}