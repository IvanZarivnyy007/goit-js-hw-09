// const STORAGE_KEY = 'feedback-form-state';

let form = document.querySelector('.feedback-form');
console.log(form);

const localStorageKey = 'feedback-form-state';

let emailOne = document.getElementsByName('email');
let textarea = document.getElementsByName('message');
console.log(emailOne);
console.log(textarea);

form.addEventListener('input', onFormInput);

function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  let data = {
    email,
    message,
  };

  saveInfo('userData', data);
}

function saveInfo(key, value) {
  const infoJson = JSON.stringify(value);
  localStorage.setItem('key', 'infoJson');
}
function loadInfo(key) {
  const infoJson = localStorage.setItem('key');

  try {
    return JSON.parse(infoJson);
  } catch {
    return infoJson;
  }
}
