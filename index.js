let elId = (id) => document.getElementById(id);
let hellip = document.getElementById('hellip');
let hellip_wrapper = elId('hellip-wrapper');
hellip.onclick = () => hellip_wrapper.classList.toggle('show');
let firstdiv = document.getElementsByClassName('first-div');

let select_click = document.getElementsByClassName('on-select')[0];
let trigger = elId('trigger');
select_click.addEventListener('click', (e) => {
    select_click.classList.toggle('on-select-click');
    trigger.classList.toggle('trigger-click');
});

hellip_wrapper.addEventListener('mouseleave', () => {
    document.body.onclick = (e) => {
        if(e.target != hellip)
        hellip_wrapper.classList.remove('show');
    }
});
let wrapper1 = elId('wrapper1');
let wrapper2 = elId('wrapper2');
let loginButton = elId('login-button');
let signUp = elId('sign-up');
let signUp2 = elId('signup-2');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper1.classList.add('disappear1');
    setTimeout(() => {
        wrapper2.classList.add('show-wrapper2');
    }, 200);
});
signUp.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper1.classList.add('disappear2');
    setTimeout(() => {
        wrapper2.classList.add('show-wrapper2');
    }, 200);
});
signUp2.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.href = 'file:///C:/Users/ojile/Documents/Spotify%20sign%20up/signuup.html'
});


let eye = elId('eye');
let eye_slash = elId('eye-slash');
let pass_word = elId('password');

eye.onclick = function() {
    this.nextElementSibling.style.display = 'block'; 
    this.style.display = 'none';
    pass_word.type = 'text';
}
eye_slash.onclick = function() {
    this.previousElementSibling.style.display = 'block'; 
    this.style.display = 'none';
    pass_word.type = 'password';
}