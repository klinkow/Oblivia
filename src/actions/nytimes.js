import axios from 'axios';
export const ROUND1 = 'ROUND1';

export function nytimes(dispatch) {
  axios.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/U.S./1.json?api-key=').then(response => {
    var articles = response.data["results"]
    // results format: [ [correct answer, blankedHeadline, four multiple choice answers],
    //                   [correct answer, blankedHeadline, four multiple choice answers],
    //                   ... ]
    var results = [];
    var lastNames = [];
    var extraLastNames = [];
    articles.forEach((article) => {
      if (article['per_facet'] != []) {
        var headlineWords = article['title'].split(" ").map((word) => {return word.toLowerCase()})
        var firstPersonFlag = true;
        article['per_facet'].map((person) => {
          person = person.split(",")[0].toLowerCase();
          if (!lastNames.includes(person) && !extraLastNames.includes(person)) {
            if (firstPersonFlag) {
              lastNames.push(person)
              var skipFlag = false;
              headlineWords.forEach((word) => {
                if ((person === word) && (results.length < 2) && (skipFlag === false)) {
                  // If you need to split the headline at the blank:
                  // blankSpaceIndex = headlineWords.indexOf(word)
                  // if (blankSpaceIndex != 0) {
                  //   headlinePart1 = headlineWords.slice(0, (blankSpaceIndex - 1));
                  // } else {
                  //   headlinePart1 = "";
                  // }
                  // headlinePart2 = headlineWords.slice(blankSpaceIndex);
                  // ...
                  headlineWords.splice(headlineWords.indexOf(word), 1, 'BLANK')
                  results.push([person, headlineWords.join(" ")]);
                  skipFlag = true;
                }
              })
              firstPersonFlag = false;
            }
            extraLastNames.push(person)
          }
        })
      }
    })

    var allLastNames = lastNames.concat(extraLastNames)
    var resultIndex = 0;
    var allAnswers = [];
    results.forEach((result) => {
      var answers = []
      var counter = 0
      allLastNames.forEach((lastName) => {
        if ((lastName != result[0]) && !([].concat.apply([], allAnswers).includes(lastName)) && (counter < 3)) {
          answers.push(lastName);
          counter ++;
        }
      })
      answers.push(result[0])
      allAnswers.push(answers);
      resultIndex ++;
    })
    resultIndex = 0
    allAnswers.forEach((answers) => {
      // randomize each set of answers:
      var mixedAnswers = [];
      while (mixedAnswers.length < 4) {
        var randomIndex = Math.floor((Math.random() * answers.length))
        mixedAnswers.push(answers.slice(randomIndex, (randomIndex + 1)).join());
        answers.splice(randomIndex, 1)
      }
      results[resultIndex].push(mixedAnswers);
      resultIndex ++;
    })

    console.log("round 1: ", results);
    dispatch({
      type: ROUND1,
      gameState: 1,
      payload: results
    })
  }).catch(error => console.log(error))
}
