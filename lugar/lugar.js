const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiYWd1c3RpbmdoIiwiYSI6ImNramhpYWJhZDFpNXYycXJ4cGliczVyYjgifQ.l2Vba_zjj8Wy4VqKEKX2UA' }
    });


    // const resp = instance.get()
    //     .then(resp => {
    //         console.log(resp.data.features[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });
    // if (resp.data.features.length === 0) {
    //     throw new Error(`No hay resultados para la ${dir}`);
    // }

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para la ${dir}`);
    }
    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lng = data.center[0];

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};