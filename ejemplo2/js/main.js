'use strict';

const btn = document.querySelector('.js__btn');
const input = document.querySelector('.js__input');
const list = document.querySelector('.js__list');

function search(){
  let inputValue = input.value;
  const ENDPOINT = `https://swapi.co/api/people/?search=${inputValue}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let searchResult = '';
      for (const item of data.results){
        searchResult += `
        <li class="list__item"> 
        Name: <a href="https://swapi.co/api/people/?search=${item.name}">${item.name}</a>,<br> 
        Gender: ${item.gender} <br>
        </li>`;
      }
      list.innerHTML = searchResult;
    });
}

function fakeClick(event){
  if (event.keyCode === 13){
    search();
  }
}

input.addEventListener('keyup',fakeClick);
btn.addEventListener('click', search);