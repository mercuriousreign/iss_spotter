const request = require('request-promise-native')
const { nextISSTimesForMyLocation } = require('./iss_promised')



nextISSTimesForMyLocation()
.then((passTimes) => {
  const date = new Date(0);
    for (let pass of passTimes) {
      console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
    }
}).catch((error) => {
  console.log("It didn't work: ",error.message);
})

