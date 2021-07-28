let displayDiv = document.querySelector('#display_div')
console.log(displayDiv)

let submitButton = document.getElementById('submit_button');
console.log(submitButton)
submitButton.addEventListener('click', function(event) {
  let nameValue = document.querySelector('#nameForm').value;
  let emailValue = document.querySelector('#emailForm').value;
  let message = document.querySelector('#msgForm').value;
  console.log(message);
  let response = `Thanks for signing up, ${nameValue || emailValue}!`;
  //console.log(response)

  let display = document.querySelector('#display_div');
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(response));
        display.appendChild(p)
  event.preventDefault()

})
