import axios from 'axios';


axios.get('https://www.opentdb.com/api.php?amount=2&type=multiple')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
