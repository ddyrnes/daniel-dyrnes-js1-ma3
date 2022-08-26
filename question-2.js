apiKey = "1adb635733d147ed887a956df85f5898";
url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const container = document.querySelector(".container");

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();
  const dataList = data.results;
  container.innerHTML = "";
  for (let i = 0; i < dataList.length; i++) {
    console.log(dataList[i].name);
    console.log(dataList[i].rating);
    console.log(dataList[i].tags.length);
    if (i === 7) {
      break;
    }
    container.innerHTML += `
    <ul>
    <li> Name of Author: ${dataList[i].name} </li>
    <li> Rating: ${dataList[i].rating} </li>
    <li> Number of tags recieved: ${dataList[i].tags.length} </li>
    </ul>
    `;
  }
}
getApi();
console.log("test");
//

// getCollection("test tes".then(console.log(test)));
// ctrl//
// store.getCollection()
// Several smaller files > one big file

// Handle HTML with template - not learned yet - learn?
hello = () => console.log("hello");
