import { types } from "../types/types";

export const agregarCiudad = (ubicacion) => ({
    type: types.agregarUbicacion,
    payload: ubicacion
})