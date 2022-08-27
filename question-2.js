apiKey = "1adb635733d147ed887a956df85f5898";
url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const container = document.querySelector(".container");

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dataList = data.results;
    container.innerHTML = "";
    for (let i = 0; i < dataList.length; i++) {
      if (i === 8) {
        break;
      }
      container.innerHTML += `
    <ul class="ul-container">
    <li> <span class="span-text">Name of Author:</span> ${dataList[i].name} </li>
    <li> <span class="span-text">Rating:</span> ${dataList[i].rating} </li>
    <li> <span class="span-text">Number of tags recieved:</span> ${dataList[i].tags.length} </li>
    </ul>
    `;
    }
  } catch (error) {
    container.innerHTML = "";
    container.innerHTML = `<p class="spin-text"> An error occoured.</p>`;
  }
}
getApi();
