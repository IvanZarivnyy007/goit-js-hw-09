import"./assets/modulepreload-polyfill-3cfb730f.js";const n="feedback-form-state";let o=document.querySelector(".feedback-form");o.addEventListener("input",l);o.addEventListener("submit",s);function s(e){e.preventDefault();const t=e.target.elements.email.value,a=e.target.elements.message.value;a&&t?(console.log({email:t,message:a}),e.target.reset(),localStorage.removeItem(n)):alert("Усі поля форми повинні бути заповненні")}function l(e){const t=e.target.form.elements.email.value,a=e.target.form.elements.message.value;m(n,{email:t,message:a})}function m(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function c(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return console.error("Error parsing JSON:",a),null}}function i(){const e=c(n)||{};o.elements.email.value=e.email||"",o.elements.message.value=e.message||""}i();
//# sourceMappingURL=commonHelpers2.js.map
