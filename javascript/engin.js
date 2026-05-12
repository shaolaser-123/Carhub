const toyota = document.querySelector('.js-2jz');
const honda = document.querySelector('.js-b16');
const mazda = document.querySelector('.js-rx7');
const nissan = document.querySelector('.js-rb26');
const porsche = document.querySelector('.js-flat6');
const ford = document.querySelector('.js-coyote');
const bmw = document.querySelector('.js-s54');
const subaru = document.querySelector('.js-ej20');
const rari = document.querySelector('.js-f1');
const bugatti = document.querySelector('.js-w16');
const koenigsegg = document.querySelector('.js-v8tt');
const lambo = document.querySelector('.js-v12l');
const merc = document.querySelector('.js-v8m');
const aston = document.querySelector('.js-v12');

function play(sound){

    sound.pause();
    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log(error);
    });

}