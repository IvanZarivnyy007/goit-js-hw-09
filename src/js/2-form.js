const localStorageKey = 'feedback-form-state';

let form = document.querySelector('.feedback-form');
let textarea = document.querySelector('textarea');

// console.log(form);
// console.log(textarea);

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // console.log(email);
  // console.log(message);

  let data = {
    email,
    message,
  };

  console.log(data);
  form.reset();
  localStorage.removeItem(localStorageKey);
}

function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  console.log(email);
  console.log(message);

  let data = {
    email,
    message,
  };

  // console.log(data);

  saveInfo(localStorageKey, data);
}
// console.log(onFormInput);

function saveInfo(key, value) {
  const infoJson = JSON.stringify(value);
  localStorage.setItem(key, infoJson);
}
// console.log(saveInfo);

function loadInfo(key) {
  const infoJson = localStorage.getItem(key);

  try {
    return JSON.parse(infoJson);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}
// console.log(loadInfo);

function finish() {
  const data = loadInfo(localStorageKey) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

finish();

// console.log(form.elements);
