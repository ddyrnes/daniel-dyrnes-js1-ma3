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
    <li> Name of Author: ${dataList[i].name} </li>
    <li> Rating: ${dataList[i].rating} </li>
    <li> Number of tags recieved: ${dataList[i].tags.length} </li>
    </ul>
    `;
    }
  } catch (error) {
    container.innerHTML = "";
    container.innerHTML = `<p class="ul-container"> An error occoured.</p>`;
  }
}
getApi();
