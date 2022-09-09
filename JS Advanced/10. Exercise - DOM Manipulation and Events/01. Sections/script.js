function create(words) {
   for(let el of words){
      let div = document.createElement(`div`);
      let p = document.createElement(`p`);
      let result = document.getElementById(`content`)
      p.textContent = el;
      p.style.display = `none`;
      div.appendChild(p);
      result.appendChild(div);
      
      div.addEventListener(`click`, show)

      function show(e){
         e.target.children[0].style.display = `block`;
      }

      // console.log(el);
   }
}