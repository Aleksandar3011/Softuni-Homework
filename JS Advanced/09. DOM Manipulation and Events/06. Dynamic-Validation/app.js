function validate() {
    let pattern = /([a-z]+)@([a-z]+)\.([a-z]+)/g;

    const email = document.getElementById(`email`);
    let value = email.value;

    email.addEventListener(`change`, checkEmail);

        function checkEmail(event) {
        if(pattern.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
}

// function validate() {
//     let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
//     let inputElement = document.getElementById('email');
//     let value = inputElement.value;

//     inputElement.addEventListener('change',checkEmail);

//     function checkEmail(event) {
//         if(reg.test(event.target.value)){
//             event.target.removeAttribute('class');
//             return;
//         }

//         event.target.className = 'error';
//     }
//  }
