
const toggle = document.getElementById('icon_toggle');
const body = document.querySelector('body');

const toggler=()=>{
debugger;
if(toggle.classList.contains('bi-brightness-high-fill'))
{
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
    body.style.background='black';
    body.style.color = 'white';
    body.style.transition = '2s';
    document.getElementById('mode').innerHTML="Dark Mode";
    document.getElementById('main').style.border="5px solid rgb(0, 143, 252)"
    
}
else{
    toggle.classList.remove('bi-moon');
    toggle.classList.add('bi-brightness-high-fill');
    body.style.background='white';
    body.style.color = 'black';
    body.style.transition = '2s';
    document.getElementById('mode').innerHTML="Light Mode";
    document.getElementById('main').style.border="5px solid black"
}

}