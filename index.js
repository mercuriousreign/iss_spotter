// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error,PassTimes) => {
  if (error) {
    return console.log("Didnt work ",error);
  } else {
    const date = new Date(0);
    for (let pass of PassTimes) {
      console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
    }
  }

});