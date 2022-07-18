const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
  e.preventDefault()

const firstName = form['firstName'].value
const lastName = form['lastName'].value
const email = form['email'].value
const password = form['password'].value

  if(firstName === '') {
    addError('firstName', 'First Name cannot be empty');
  }else {
    removeError('firstName')
  }

  if(lastName === '') {
    addError('lastName', 'Last Name cannot be empty');
  }else {
    removeError('lastName')
  }

  if(email === ''){
    addError('email', 'Looks like this is not an email')
  }else if(!isValid(email)){
    addError('email', 'Email is not valid')
  }
  else{
    removeError(email)
  }

  if(password === '') {
    addError('password', 'Password cannot be empty');
  }else {
    removeError('password')
  }
})



function addError(input, message) {
  const formControl = form[input].parentNode;
  formControl.classList.add('error')

  const text = formControl.querySelector('small')
  text.innerText = message
}

function removeError(input) {
  const formControl = form[input].parentNode;
  formControl.classList.remove('error')
}

function isValid(email){
  const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return re.test(String(email).toLowerCase)
}

