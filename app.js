const axios = require("axios");
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

/*--------------------------------------------------------------------------/
  
/--------------------------------------------------------------------------*/
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${coords.direccion} es de: ${temp}° C.`;
  } catch (err) {
    return "No se pudo encontrar nada sobre " + direccion;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
