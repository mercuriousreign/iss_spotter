// index.js
const { fetchMyIP,fetchCoordsByIP } = require('./iss');
let ipadress = "";

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
//   console.log('Data is:' , data);
// });

