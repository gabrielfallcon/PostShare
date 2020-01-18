import { combineReducers } from 'redux'

import tabelaReducer from './tabela-reducer'

const reducers = combineReducers({
    tabela: tabelaReducer
})

export default reducers