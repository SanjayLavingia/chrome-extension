//connect api key to fileconst url = "http://api.football-data.org/v2/matches";
require('dotenv').config(); 
const api_key = process.env.API_KEY; 
fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Auth-Token": api_key,
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });