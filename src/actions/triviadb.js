import axios from 'axios';
export const ROUND2 = 'ROUND2';
export const ROUND4 = 'ROUND4';

export function triviaDB(dispatch) {
  axios.get('https://www.opentdb.com/api.php?amount=4&type=multiple')
  .then(function (response) {
    var rawData = response["data"]["results"]
    var results = []
    rawData.forEach((data, index) => {
      var answers = [ ...data["incorrect_answers"], data["correct_answer"] ];
      var mixedAnswers = [];
      while (mixedAnswers.length < 4) {
        var randomIndex = Math.floor((Math.random() * answers.length))
        mixedAnswers.push(answers.slice(randomIndex, (randomIndex + 1)).join());
        answers.splice(randomIndex, 1)
      }
      function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
      results.push([
        rawData[index]["correct_answer"],
        rawData[index]["question"],
        mixedAnswers
      ])
    })
    dispatch({
      type: ROUND2,
      gameState: 1,
      payload: results
    })
    dispatch({
      type: ROUND4,
      gameState: 1,
      payload: results.slice(2,4)
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}
