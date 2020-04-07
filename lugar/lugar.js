const axios = require("axios");

//=========================axios===========================//

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir); // New York -> New%20York

  // Make a request for a user with a given ID
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      // "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "x-rapidapi-key": "22791b6f37msh268402f593edee4p1df8a3jsnbd2aeac392ed",
    },
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error("No hay resultados para " + dir);
  }

  const data = resp.data.Results[0]

  const direccion = data.name
  const lat = data.lat
  const lng = data.lon

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng
}