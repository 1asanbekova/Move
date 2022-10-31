// Стянуть данные с API и отобразить на странице (картинку, название и год) в виде карточек.
// Примерный результат:

//
let list = document.querySelector(".list");

let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(API)
  .then((i) => i.json())
  .then((j) => {
    console.log(j);
    j.Search.forEach((a) => {
      list.innerHTML += `
      <li>

      <img src =${a.Poster} />
       <h4>${a.Title}</h4>
      <h4>Year: ${a.Year}</h4>
      </li>

      `;
    });
  });
