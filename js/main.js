const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const listEl = document.getElementById("list-container");

for (let i = 1; i <= 10; i++) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      listEl.innerHTML += `<li class="list-group-item">${data.response}</li>`;
    });
}
