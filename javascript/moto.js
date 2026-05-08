import {nissanCards, mazdaCards, mercCards, toyotaCards, audiCards, bmwCards} 
from './moto.carData.js';
import {likedCars} from './likedCars.js'
import { carMap } from './moto.carData.js';
import { logos } from './logos.js';
let search = document.querySelector('.js-searchedCar');
let displayCars = document.querySelector('.js-displayCar');

logos.forEach((logo) =>{
    displayCars.innerHTML = `<div id="logo">
        <img class="logos" src="${logo}" alt="image">
    </div>`;
});

function searcher(){
    let html='';
    displayCars.innerHTML='';

    const query = search.value.toLowerCase();

    // 🔴 NEW: combine ALL cars into one array
    const allCars = Object.values(carMap).flat();

    // 🔴 FILTER: check BOTH brand + car name
    const filteredCars = allCars.filter(car => {
        return car.name.toLowerCase().includes(query);
    });

    // ❌ OLD CODE (brand-only search)
    /*
    const brand = search.value.toLowerCase();
    const selectedCars = carMap[brand];
    */

    // 🔴 If nothing found
    if(filteredCars.length === 0){
        displayCars.innerHTML = `<p style="text-align: center; margin-left: auto; margin-right: auto;">No cars found for "${query}"</p>`;
        return;
    }

    // 🔴 Use filteredCars instead
    filteredCars.forEach((car)=>{
        const isLiked = likedCars.some(item => item.carName === car.name);
        html+=`
        <div id="carCard" class="js-carCards">
            <h2>${car.name}</h2>
            <hr>
            <img src="${car.image}" class="cardImages"><br>
            <button class="js-saved" data-car-name="${car.name}">
            <i class="${isLiked ? 'fa-solid liked' : 'fa-regular'} fa-heart"></i></button><br>
            <hr>
            <table>
                <tr>
                    <th>Acceleration</th>
                    <th>Horsepower</th>
                    <th>Engine</th>
                    <th>Torque</th>
                    <th>Price</th>
                    <th>Chassis</th>
                </tr>
                <tr>
                    <td>${car.acceleration}</td>
                    <td>${car.hp}</td>
                    <td>${car.engine}</td>
                    <td>${car.torque}</td>
                    <td>${car.price}</td>
                    <td>${car.chassis}</td>
                </tr>
            </table>
        </div>
        `;
    });

    displayCars.innerHTML = html;
}
displayCars.addEventListener('click', (event)=>{
    
    const button = event.target.closest('.js-saved');
    if(!button) return;

    const icon = button.querySelector('.fa-heart'); // 🔴 target icon
    const carName = button.dataset.carName;

    const index = likedCars.findIndex(item => item.carName === carName);

    if(index !== -1){
        // ❌ UNLIKE
        likedCars.splice(index, 1);

        icon.classList.remove('fa-solid', 'liked');
        icon.classList.add('fa-regular');

    } else {
        // ✅ LIKE
        likedCars.push({ carName });

        // 🔥 switch icon style
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');

        // 🔥 trigger animation
        icon.classList.add('animate-like');

        // 🔥 AFTER animation → make it red
        setTimeout(()=>{
            icon.classList.add('liked');
            icon.classList.remove('animate-like');
        }, 400); // match animation duration
    }

    localStorage.setItem('likedCars', JSON.stringify(likedCars));
});
search.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        searcher();
    }
});
