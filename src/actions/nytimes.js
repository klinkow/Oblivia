import axios from 'axios';
export const ROUND1 = 'ROUND1';
import { API_KEY } from '../../nytimes_api_key';

// This function takes data from the latest New York Times
// and creates trivia questions

// The output of this function will have this format:
// [ [correct answer, question, [four multiple choice answers including correct answer]],
//   [correct answer, question, [four multiple choice answers including correct answer]],
//   ...
// ]

// There are three main sections to this function, explained below...

export function nytimes(dispatch) {
  axios.get(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/U.S./1.json?api-key=${API_KEY}`).then(response => {
    var articles = response.data["results"]
    var output = [];
    var lastNames = [];
    var extraLastNames = [];

    // Section 1: gather all of the last names from the articles,
    // prioritizing them roughly by how suitable they are as dummy answers.

    // For each U.S. news article
    articles.forEach((article) => {
      let peopleOfInterest = article['per_facet']
      let firstPerson = ""
      // If the article contains a person of interest
      if (peopleOfInterest) {
        // reformat list to lowercase last names
        peopleOfInterest = peopleOfInterest.map(person => {return person.split(",")[0].toLowerCase()})
        // Split people into first on the list vs. everyone else
        firstPerson = peopleOfInterest[0]
        let otherPeople = peopleOfInterest.slice(1)
        // If not yet stored, store these two sets of people in separate arrays
        if (!lastNames.includes(firstPerson)) {
          lastNames.push(firstPerson);
        }
        if (otherPeople != []) {
          otherPeople.forEach(person => {
            if (!extraLastNames.includes(person)) {
              extraLastNames.push(person)
            }
          })
        }

        // Section 2: Generate a trivia question - a headline with a name replaced by a blank.

        // If you haven't already generated two trivia questions
        if (output.length < 2) {
          // Split the headline into words
          let headlineWords = article['title'].toLowerCase().split(" ")
          for (let word of headlineWords) {
            // If the last name is contained in the headline
            if (firstPerson === word) {
              // Replace the last name in the headline with 'BLANK'
              headlineWords.splice(headlineWords.indexOf(word), 1, 'BLANK')
              // Store the blanked headline and the correct answer
              output.push([firstPerson, headlineWords.join(" ")]);
              break;
            }
          }
        }
      }
    })

    // Section 3: Create an array of four answers for each trivia question.

    // Create a long list of dummy answers
    let allLastNames = lastNames.concat(extraLastNames)
    // Start with each question-answer pair you have created
    output.forEach((result, index) => {
      // Create an array to store answers (includes correct answer only at this point)
      let answers = [result[0]]
      // Until there are four answers...
      while (answers.length < 4) {
        if (allLastNames[0] != result[0]) {
          // add the first of the dummy answers...
          answers.push(allLastNames[0])
          // (remove it from list of dummy answers)
          allLastNames = allLastNames.slice(1)
          // unless the first of the dummy answers is the correct answers, in which case...
        } else {
          // add the next of the dummy answers
          answers.push(allLastNames[1])
          // (and remove it from the list)
          allLastNames.splice(1,1)
        }
      }
      // Randomize answers (via Bill's compact randomizer)
      let mixedAnswers = [];
      while (mixedAnswers.length < 4) {
        let randomIndex = Math.floor((Math.random() * answers.length))
        mixedAnswers.push(answers.slice(randomIndex, (randomIndex + 1)).join())
        answers.splice(randomIndex, 1)
      }
      // push answers to output
      output[index].push(mixedAnswers)
    })
    console.log("round 1: ", output);
    // Send data along to reducer
    dispatch({
      type: ROUND1,
      gameState: 1,
      payload: output
    })
  }).catch(error => console.log(`   _..__.          .__.._\n  .^"-.._ '(\\__/)-' _..-"^.\n        '-.' oo '.-'\n           '-..-'     Bugs!!!\n`, error))
}
