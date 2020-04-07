const axios = require("axios");

//=========================axios===========================//
const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d353871fb5267f440b362691ddb39906&units=metric`
  );
  
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
