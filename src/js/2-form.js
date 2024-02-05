const localStorageKey = 'feedback-form-state';

let form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  if (message && email) {
    let data = {
      email,
      message,
    };
    console.log(data);
    e.target.reset();
    localStorage.removeItem(localStorageKey);
  } else {
    alert('Усі поля форми повинні бути заповненні');
  }
}

function onFormInput(e) {
  const email = e.target.form.elements.email.value.trim();
  const message = e.target.form.elements.message.value.trim();
  let data = {
    email,
    message,
  };
  saveInfo(localStorageKey, data);
}

function saveInfo(key, value) {
  const infoJson = JSON.stringify(value);
  localStorage.setItem(key, infoJson);
}

function loadInfo(key) {
  const infoJson = localStorage.getItem(key);
  try {
    return JSON.parse(infoJson);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

function finish() {
  const data = loadInfo(localStorageKey) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

finish();
