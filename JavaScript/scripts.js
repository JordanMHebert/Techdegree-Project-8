fetch("https://randomuser.me/")
  .then(response => response.json())
  .then(data => generateImage(data.message));

function generateImage(data) {
  const html = `
      <img src='${data}' alt>
      <p>Name here${select.value}s</p>
    `;
  card.innerHTML = html;
}
