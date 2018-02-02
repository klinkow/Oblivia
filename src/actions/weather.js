import axios from 'axios';
// export const ROUND3 = 'ROUND3';
const API_KEY = '5a55afb4cf4abad44ccbc3fb9f994a69';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}`;
var results = []
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "Austin", "Jacksonville", "Indianapolis", "San Francisco", "Columbus", "Fort Worth", "Charlotte", "Detroit", "Memphis", "Boston", "Seattle", "Denver", "Washington", "Nashville", "Baltimore", "Louisville", "Portland"]
var randomIndex1 = Math.floor((Math.random() * cities.length))
var randomIndex2 = Math.floor((Math.random() * cities.length))
while (randomIndex2 === randomIndex1) {
  randomIndex2 = Math.floor((Math.random() * cities.length))
}
var indexes = [randomIndex1, randomIndex2]
function convertKToFahr(temp) {
  return Math.floor(((temp - 273.15) * (9 / 5)) + 32);
}

export function weather(dispatch) {
  indexes.forEach((index) => {
    const url = `${ROOT_URL}&q=${cities[index]},us`;
    axios.get(url).then(response => {
      var name = response["data"]["name"]
      var temp = convertKToFahr(response["data"]["main"]["temp"])
      var wrongAnswers = [temp - 15, temp - 10, temp - 5, temp + 5, temp + 10, temp + 15]
      var mixedAnswers = []
      while (mixedAnswers.length < 3) {
        var randomIndex = Math.floor((Math.random() * wrongAnswers.length))
        mixedAnswers.push(parseInt(wrongAnswers.slice(randomIndex, (randomIndex + 1)).join()));
        wrongAnswers.splice(randomIndex, 1)
      }
      mixedAnswers.splice(0, 0, temp);
      results.push([temp, name, mixedAnswers.sort()])
    });
  })
  setTimeout(() => {
    console.log("round 3: ", results);
    dispatch({
      type: ROUND3,
      gameState: 1,
      payload: results
    });
    console.log("please dispatch")
  }, 1000)


}
