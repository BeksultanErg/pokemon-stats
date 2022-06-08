'use strict';

const API = 'https://pokeapi.co/api/v2/pokemon/';
const app = document.getElementById('app');

async function getPokemon() {
   const responce = await fetch(API)
      .then(res => res.json())
      .catch(err => console.log(err));
   console.log(responce);
   responce.results.forEach(item => {
      const newElem = document.createElement('div');
      newElem.style.cursor = 'pointer';
      newElem.innerText = item.name;
      newElem.className = 'pokemon';
      newElem.id = item.url;
      app.append(newElem);
   });
}
getPokemon();

const info = document.getElementById('info');
// console.log(info);

document.addEventListener('click', async function (e) {
   if (e.target.className === 'pokemon') {
      const responce = await fetch(e.target.id)
         .then(res => res.json())
         .catch(err => console.log(err));
      // console.log(responce);
      info.innerHTML = `<div>Имя: ${responce.name}</div>
      <div>Рост: ${responce.height}</div>
      <div>Вес: ${responce.weight}</div>
      <div>Тип: ${responce.types[0].type.name}</div>
      <img src = ${responce.sprites.front_default} />`;
      console.log(responce.sprites);
   }
   // console.log(e.target.id);
});