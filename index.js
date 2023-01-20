// index.js
const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');
let ipadress = "";
let coordinates = { latitude: '49.27670', longitude: '-123.13000' };

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  ipadress = ip;
});

// fetchCoordsByIP(ipadress,(error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   coordinates = data;
//   console.log('Data is:' , data);
// });

fetchISSFlyOverTimes(coordinates,(error,passTimes)=> {
  if (error) {
    console.log("It didnt work " , error);
    return;
  }
  console.log('Flyoverpass time is',passTimes);

});