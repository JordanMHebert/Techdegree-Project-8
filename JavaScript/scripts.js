const select = document.getElementById("gallery");
const card = document.querySelector(".directory");
const Info = document.querySelector("employee1");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch("https://dog.ceo/api/breeds/list")
  .then(response => response.json())
  .then(data => generateOptions(data.message));

fetch("https://randomuser.me/")
  .then(response => response.json())
  .then(data => generateImage(data.message));

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateOptions(data) {
  const options = data
    .map(
      item => `
      <option value='${item}'>${item}</option>
    `
    )
    .join("");
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
      <img src='${data}' alt>
      <p>Name here${select.value}s</p>
    `;
  card.innerHTML = html;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
