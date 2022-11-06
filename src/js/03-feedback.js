
import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    email: document.querySelector('input'),
};
let formData = {};
savedFormData();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
}, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
};
function savedFormData() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedForm);
    if (parsedFormData) {
        formData = parsedFormData;
        refs.email.value = formData.email || '';
        refs.textarea.value = formData.message || '';
        // console.log(formData);
    }
};