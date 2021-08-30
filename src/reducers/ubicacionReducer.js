import { types } from "../types/types";
const valoresIniciales = {
    ciudad: 'Guadalajara',
    pais: 'MX'
}
export const ubicacionReducer = (state = valoresIniciales, action) => {
    switch (action.type) {
        case types.agregarUbicacion:
            return {
                ...state,
                ciudad: action.payload.ciudad,
                pais: action.payload.pais,
            }
        default:
            return state
    }
}