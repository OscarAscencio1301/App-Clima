import React from 'react'
import { Provider } from 'react-redux'
import { Clima } from './components/Clima'
import { Formulario } from './components/Formulario'
import { store } from './store/store'

export const App = () => {
    return (
        <Provider store={store}>
        <div className="container">
            <Clima />
            <Formulario />
        </div>
        </Provider>
    )
}
