import { carMap } from "./moto.carData.js";
import { likedCars } from "./likedCars.js";
const button = document.querySelector('.js-clear');
let html = '';
let show = document.querySelector('.js-savedItem');

likedCars.forEach((likedCar) => {

    const car = likedCar.carName;

    let matchingCar;

    // ❌ WRONG
    // carMap.forEach((carMap) => {

    // ✅ FIX
    Object.values(carMap).forEach((brandArray) => {

        brandArray.forEach((carItem) => {

            if(carItem.name === car){
                matchingCar = carItem;
            }

        });

    });

    // ✅ prevent crash
    if(matchingCar){
        html += `<div id="liked">
            <h2>${matchingCar.name}</h2>
            <img src="${matchingCar.image}" id="likedPic">
            <p id="text">
                ${matchingCar.p}
            </p>
        </div>`;
    }
    show.innerHTML = html;
});

if(button){
    button.addEventListener('click', () => {
        const userSaidYes = confirm("Delete all liked cars?");
        // clear array
        if (userSaidYes){
        likedCars.splice(0, likedCars.length);
        // clear storage
        localStorage.removeItem('likedCars');
        // clear UI
        document.querySelector('.js-savedItem').innerHTML = '';
        } else {
            return;
        }
        console.log('Cleared:', likedCars);
    });
}