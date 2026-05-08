const dropdown = document.querySelector('.dropdown');
const offsmenu = document.querySelector('.off-s-menu');
dropdown.addEventListener('click', ()=>{
    dropdown.classList.toggle('active');
    offsmenu.classList.toggle('active');
});