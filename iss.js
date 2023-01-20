const request = require("request");
const site = "https://api.ipify.org?format=json";
const geoSite = "http://ipwho.is/";

const fetchMyIP = function(callback) {
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
    callback(null,ip);
  });
};

//`http://ipwho.is/[${ip}]`
const fetchCoordsByIP = function(ip, callback) {
  request(geoSite + ip, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.success) {
      const { latitude,longitude} = data;
      callback(null,{latitude,longitude});

    } else {
      const message = `Error, Server output:${data.message}`;
      callback(Error(message),null);
    }
    
    //callback(null,data);
    //return;

  });


};

const fetchISSFlyOverTimes = function(coords, callback) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  const req = `https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`;
  request(req, (error, response, body) => {
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      callback(Error(),null);
      return;
    }

    if (data.message === "success") {
      callback(null,data.response);
    } else {
      callback(Error(data.message),null);
    }
  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};