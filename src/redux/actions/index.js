import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const DETAILS_CLEAN = 'DETAILS_CLEAN';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_TEMPS = 'FILTER_BY_TEMPS';

const { API_KEY } = process.env;


export const getDogs = () => {
    return async function(dispatch) {
        const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const apiData = await api.data.map( dog => {
            return {
                id: dog.id,
                nombre: dog.name,
                altura: `${dog.height.metric} CM`,
                peso: dog.weight.metric === "NaN - 8" || dog.weight.metric === "NaN" ? "" : `${dog.weight.metric} KG`,
                años_de_vida: dog.life_span,
                grupo_raza: dog.breed_group,
                temperamento: dog.temperament ? dog.temperament : "",
                temperamentos: "",
                imagen: dog.image.url
            }
        })
        return dispatch({
            type: GET_DOGS,
            payload: apiData
        });
    }
};

export const getDetails = (id) => {
    return async function(dispatch) {
        const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const apiData = await api.data.map( dog => {
            return {
                id: dog.id,
                nombre: dog.name,
                altura: `${dog.height.metric} CM`,
                peso: dog.weight.metric === "NaN - 8" || dog.weight.metric === "NaN" ? "" : `${dog.weight.metric} KG`,
                años_de_vida: dog.life_span,
                grupo_raza: dog.breed_group,
                temperamento: dog.temperament ? dog.temperament : "",
                temperamentos: "",
                imagen: dog.image.url
            }
        })
        const dogSearch = await apiData.filter( dog => dog.id.toString() === id.toString() );

        return dispatch({
            type: GET_DETAILS,
            payload: dogSearch
        })   
    }
};

export const getTemperaments = () => {
    return async function(dispatch) {
        const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const apiData = await api.data.map( dog => {
            return {
                id: dog.id,
                temperamento: dog.temperament ? dog.temperament : "",
                temperamentos: "",
            }
        })

        const temperaments_sin_dividir = apiData.map(dog => dog.temperamento);
        const temperaments_array = temperaments_sin_dividir.toString().replace(/ /g, "").split(',');
        const temperaments_purif = [...new Set(temperaments_array)]
        const allTemperaments = temperaments_purif.filter( temp => temp !== '');

        let ordenado = allTemperaments.sort((a, b) => {
                if (a > b) {
                    return 1;
                }
                if (b > a) {
                    return -1;
                }
                return 0;
            });
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: ordenado
        });
    }
}

export const filterByTemps = ( temp ) => {
    return {
        type: FILTER_BY_TEMPS,
        payload: temp
    }
}

export const getDogsByName = ( name ) => {
    return async function( dispatch ) {
        const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const apiData = await api.data.map( dog => {
            return {
                id: dog.id,
                nombre: dog.name,
                altura: `${dog.height.metric} CM`,
                peso: dog.weight.metric === "NaN - 8" || dog.weight.metric === "NaN" ? "" : `${dog.weight.metric} KG`,
                años_de_vida: dog.life_span,
                grupo_raza: dog.breed_group,
                temperamento: dog.temperament ? dog.temperament : "",
                temperamentos: "",
                imagen: dog.image.url
            }
        })
        const dogSearch = await apiData.filter( dog => dog.nombre.toLowerCase().includes(name.toLowerCase()) );


        return dispatch({
            type: GET_DOGS_BY_NAME,
            payload: dogSearch
        })   
    }
};

export const detailsClean = () => {
    return {
        type: DETAILS_CLEAN,
        payload: {}
    }
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    };
};

export const orderByWeight = (payload) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    };
};