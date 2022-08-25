apiKey = "1adb635733d147ed887a956df85f5898";
url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

async function getApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data");
}
getApi();
