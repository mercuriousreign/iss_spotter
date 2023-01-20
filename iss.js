const request = require("request")
const site = "https://api.ipify.org?format=json";
const fetchMyIP = function (callback) {
  request(site, (error, response, body) => {
    
    if (error) {
      callback(error,null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null,ip)

    // try {
    //   const foundData = JSON.parse(body);
    //   console.log(foundData);
    // } catch (error) {
    //   callback (error,null);
    //   return;
    // }
  });
}

module.exports = { fetchMyIP }