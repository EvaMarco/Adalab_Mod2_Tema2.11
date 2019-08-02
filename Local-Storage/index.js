'use strict';

// 1. Cuando guardamos algo en el storage lo guardamos como cadena
// const num = 77;
// num = 'Mi numeor favorito es 77'

// localStorage.setItem('numero', num);

// const savedNumber = parseInt(localStorage.getItem('numero'));

// console.log(savedNumber);

// 2. Si tengo que guardar un objeto o un Array, tengo que convertirlo en cadena y luego desconvertirlo en Array 

// const nums = [1,5,77];

// localStorage.setItem('numero', nums);

// const savedNumber = localStorage.getItem('numero');

// console.log(savedNumber);

//3.Como lo primero que tengo que hacer es comprobar que no sea nulo. 
// const nums = [1,5,77];

// localStorage.setItem('numeros', nums);

// let savedNumber;
// if (localStorage.getItem('numeros')!== null){
//   savedNumber = JSON.parse(localStorage.getItem('numeros'));
// } else{
//   savedNumber= [] ;
// }
// ;

// console.log(savedNumber);


//4. Con un objeto pasa lo mismo


// const nums = {
//   num1: 1,
//   num2: 5,
//   num3: 77
// };

// localStorage.setItem('numeros', nums);

// let savedNumber;
// if (localStorage.getItem('numeros')!== null){
//   savedNumber = JSON.parse(localStorage.getItem('numeros'));
// } else{
//   savedNumber= [] ;
// }
// ;

// console.log(savedNumber);

//5 si quiero guardar lo que escribo en un input: 

const field = document.querySelector('.input');
const title = document.querySelector('.title');

//si jay algo en le Local Storage
if(localStorage.getItem('name') !== null){
  //lo vas a guardar en esta variable y si es una cadena NO lo ponemos parse!  
  // const lsSaved= JSON.parse(localStorage.getItem('name')); --> lo utilizamos con objetos o arrays
  const lsSaved= localStorage.getItem('name');
  //ponlo en campo
  field.value = lsSaved;
  //y en h1
  title.innerHTML = lsSaved;
}

function doTHis(){
  const value = event.currentTarget.value;
  
  title.innerHTML = value;
  localStorage.setItem('name', value); 
}
field.addEventListener('keyup', doTHis)

// cuando le damos a reset --> borramos los datos del local storage y ponemos en el localStorage por defecto. 