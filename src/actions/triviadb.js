import axios from 'axios';
export const ROUND2 = 'ROUND2';
export const ROUND3 = 'ROUND3';
export const ROUND4 = 'ROUND4';
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function triviaDB(dispatch) {
  axios.get('https://www.opentdb.com/api.php?amount=6&type=multiple')
  .then(function (response) {
    var rawData = response["data"]["results"]
    var results = []
    rawData.forEach((data, index) => {
      var answers = [ ...data["incorrect_answers"], data["correct_answer"] ];
      var mixedAnswers = [];

      while (mixedAnswers.length < 4) {
        var randomIndex = Math.floor((Math.random() * answers.length))
        mixedAnswers.push(decodeHtml((answers.slice(randomIndex, (randomIndex + 1))).join()));
        answers.splice(randomIndex, 1)
      }

      results.push([
        decodeHtml(rawData[index]["correct_answer"]),
        decodeHtml(rawData[index]["question"]),
        mixedAnswers
      ])
    })
    console.log("round 2: ", results.slice(0,2));
    console.log("round 3: ", results.slice(2,4));
    console.log("round 4: ", results.slice(4,6));
    dispatch({
      type: ROUND2,
      gameState: 1,
      payload: results.slice(0,2)
    })
    dispatch({
      type: ROUND3,
      gameState: 1,
      payload: results.slice(2,4)
    })
    dispatch({
      type: ROUND4,
      gameState: 1,
      payload: results.slice(4,6)
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}
