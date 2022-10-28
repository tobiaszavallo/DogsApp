import { GET_DOGS, DETAILS_CLEAN, GET_DETAILS, GET_NAME_DOGS,
    GET_DOGS_BY_NAME, ORDER_BY_NAME, ORDER_BY_WEIGHT, 
    GET_TEMPERAMENTS, FILTER_BY_TEMPS } from '../actions';


const initialState = {
dogs: [],
allDogs: [],
dogDetail: {},
temperaments: [],
breeds: [],
};


const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case GET_DOGS:
        return {
            ...state,
            dogs: action.payload,
            allDogs: action.payload
        }
    case GET_TEMPERAMENTS:
        return {
            ...state,
            temperaments: action.payload
        }
    case FILTER_BY_TEMPS: 
        return {
            ...state,
            dogs: action.payload === 'AllTemperaments' ? state.allDogs : state.allDogs.filter( dog => dog.temperamento.includes(action.payload) )
        }
        case GET_DETAILS:
            return {
                ...state,
                dogDetail: action.payload 
            }
        case DETAILS_CLEAN: 
            return {    
                ...state,
                dogDetail: action.payload
            }
    case GET_NAME_DOGS:
        return {
            ...state,
            dogs: action.payload
        }
    case GET_DOGS_BY_NAME:
        return {
            ...state,
            dogs: action.payload.length > 0 ? action.payload : []
        }
    case ORDER_BY_NAME:
        let ordenado = action.payload === 'A-Z' ? 
            state.dogs.sort((a, b) => {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (b.nombre > a.nombre) {
                    return -1;
                }
                return 0;
            }) : 
            state.dogs.sort((a, b) => {
                if (a.nombre > b.nombre) {
                    return -1;
                }
                if (b.nombre > a.nombre) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                dogs: ordenado
            }
        case ORDER_BY_WEIGHT:
            let copia = JSON.parse(JSON.stringify(state.allDogs));
            copia = copia.filter(d => d.peso !== "");
            let ordenadoPorPeso

            if (action.payload === 'AllWeight') {
                ordenadoPorPeso = JSON.parse(JSON.stringify(state.allDogs));
            } else {
                    ordenadoPorPeso = action.payload === 'ascendent' ? 
                    copia.sort((a, b) => {return parseInt(a.peso) - parseInt(b.peso)}) 
                    :
                    copia.sort((a, b) => {return parseInt(b.peso) - parseInt(a.peso)});
                    
            }
            return {
                ...state,
                dogs: ordenadoPorPeso
            }
    default:
        return state;
}       
}


export default rootReducer;