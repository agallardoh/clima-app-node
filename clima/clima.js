const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=546be9fbe1805bc0f97c5a62b3cdd455&units=metric`);
    return resp.data.main.temp;
};


module.exports = {
    getClima
}