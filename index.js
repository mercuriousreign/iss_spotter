// index.js
const { nextISSTimesForMyLocation } = require('./iss');
// let ipadress = "";
// let coordinates = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
//   ipadress = ip;
// });

// fetchCoordsByIP(ipadress,(error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   coordinates = data;
//   console.log('Data is:' , data);
// });

// fetchISSFlyOverTimes(coordinates,(error,passTimes)=> {
//   if (error) {
//     console.log("It didnt work " , error);
//     return;
//   }
//   console.log('Flyoverpass time is',passTimes);

// });

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