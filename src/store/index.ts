import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefa'
import filtroReducer from './reducers/filtro'
import cadastroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer,
    cadastrar: cadastroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
