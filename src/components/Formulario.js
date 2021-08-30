import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { agregarCiudad } from '../actions/ubicacionAction'
import { useForm } from '../hooks/useForm'

export const Formulario = () => {
    const dispatch = useDispatch()
    const [valores, cambioInput] = useForm({
        ciudad: '',
        pais: ''
    })
    const { ciudad, pais } = valores

    const envioForm = (e) => {
        e.preventDefault()
        if (validar()) {
            dispatch(agregarCiudad(valores))
        }
    }

    const validar = () => {
        if (ciudad.trim().length === 0 || pais === "") {
            Swal.fire({
                title: 'Completa todos los campos',
                icon: 'error'
            })
            return false
        }

        return true

    }
    return (
        <div className="form__container">
            <form className="form" onSubmit={envioForm}>
                <h1>Busca el Clima de tu Ciudad Favorita</h1>
                <input
                    type="text"
                    placeholder="Escribe la Ciudad"
                    className="form__input"
                    name="ciudad"
                    value={ciudad}
                    onChange={cambioInput}
                />
                <select className="form__input" name="pais" value={pais} onChange={cambioInput}>
                    <option>Selecciona el País</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>

                <button className="form__boton" type="submit">Buscar</button>
            </form>

        </div>
    )
}
