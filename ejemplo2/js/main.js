'use strict';

const criaturas = document.querySelector('.criaturas');

function getCriaturas(){
  const ENDPOINT = 'https://randomuser.me/api/?results=5';
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data =>{
      localStorage.setItem('criaturas', JSON.stringify(data));
      paintCriaturas(data.results);
    });
}

function paintCriaturas(arr){
  let lis = '';
  for (const criatura of arr){
    lis +=`
    <li class="criatura">
    <img 
        src="${criatura.picture.large}" 
        alt="${criatura.name.first} ${criatura.name.last}"
    >
    <h2 class="criatura__name">
    ${criatura.name.first} ${criatura.name.last}
    </h2> 
    `;
  }
  criaturas.innerHTML = lis;
}

// Si hay datos guardados
// pinta esos

if(localStorage.getItem('criaturas') !== null){
  const savedData = JSON.parse(localStorage.getItem('criaturas'));
  paintCriaturas(savedData.results);
}
else{
  // Sin no haz la petición
  // Guarda los datos
  getCriaturas();
}

