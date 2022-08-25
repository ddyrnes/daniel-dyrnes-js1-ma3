apiKey = "1adb635733d147ed887a956df85f5898";
url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();
  const dataList = data.results;
  /*   console.log(data); */
  console.log(dataList);
  for (let i = 0; i < dataList.length; i++) {
    console.log(dataList[i].name);
    console.log(dataList[i].rating);
    console.log(dataList[i].tags.length);
    if (i === 7) {
      break;
    }
  }
}
getApi();
