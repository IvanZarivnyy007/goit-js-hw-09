// const STORAGE_KEY = 'feedback-form-state';
const localStorageKey = 'feedback-form-state';

let form = document.querySelector('.feedback-form');
let textarea = document.querySelector('message');

form.addEventListener('input', onFormInput);

function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  //   let data = {
  //     email,
  //     message,
  //   };

  //   saveInfo('userData', data);
}
// console.log(onFormInput);

// function saveInfo(key, value) {
//   const infoJson = JSON.stringify(value);
//   localStorage.setItem('key', 'infoJson');
// }
// console.log(saveInfo);

// function loadInfo(key) {
//   const infoJson = localStorage.setItem('key');

//   try {
//     return JSON.parse(infoJson);
//   } catch {
//     return infoJson;
//   }
// }
// console.log(loadInfo);
