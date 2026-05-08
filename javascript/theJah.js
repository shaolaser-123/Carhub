const dropdown = document.querySelector('.dropdown');
const offsmenu = document.querySelector('.off-s-menu');
dropdown.addEventListener('click', ()=>{
    dropdown.classList.toggle('active');
    offsmenu.classList.toggle('active');
});
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 1700){
        topBtn.classList.add('show');
    }

    else{
        topBtn.classList.remove('show');
    }

});

topBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});