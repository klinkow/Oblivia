import axios from 'axios';
export const ROUND2 = 'ROUND2';

export function triviaDB(dispatch) {
  axios.get('https://www.opentdb.com/api.php?amount=2&type=multiple')
  .then(function (response) {
    console.log(response["data"]["results"]);
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
      results.push([
        rawData[index]["correct_answer"],
        rawData[index]["question"],
        mixedAnswers
      ])
    })
    console.log("round 2: ", results);
    dispatch({
      type: ROUND2,
      gameState: 1,
      payload: results
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}
